const test = require('node:test');
const assert = require('node:assert');
const {
  sanitizeUserPayload,
  formatCoordinates,
  getNestedConfig,
  extractServiceInfo,
  mergeServerOptions,
  createEventDispatcher,
} = require('./index');

// ==============================================================================
// BÀI 1: CHUẨN HÓA PAYLOAD API & XỬ LÝ TỌA ĐỘ GIS
// ==============================================================================

test('Bài 1.1: sanitizeUserPayload loại bỏ trường nhạy cảm và chuẩn hóa thông tin', () => {
  const rawInput = {
    username: '  alex_dev  ',
    email: 'ALEX@DOMAIN.COM',
    role: 'editor',
    password: 'super-secret-password',
    salt: 'random-salt-hex',
    secretToken: 'jwt-refresh-token',
    isAdmin: true,
    age: 28,
    department: 'Engineering',
  };

  const sanitized = sanitizeUserPayload(rawInput);

  assert.deepStrictEqual(sanitized, {
    username: 'alex_dev',
    email: 'alex@domain.com',
    role: 'editor',
    extraInfo: {
      age: 28,
      department: 'Engineering',
    },
  });

  // Không làm đột biến payload gốc
  assert.strictEqual(rawInput.password, 'super-secret-password');
  assert.strictEqual(rawInput.isAdmin, true);

  // Xử lý giá trị mặc định khi thiếu thông tin
  const minimal = sanitizeUserPayload({ role: null });
  assert.strictEqual(minimal.username, 'anonymous');
  assert.strictEqual(minimal.email, '');
  assert.strictEqual(minimal.role, 'member');

  // Trả về null nếu đầu vào không hợp lệ
  assert.strictEqual(sanitizeUserPayload(null), null);
  assert.strictEqual(sanitizeUserPayload(undefined), null);
  assert.strictEqual(sanitizeUserPayload('not an object'), null);
});

test('Bài 1.2: formatCoordinates định dạng chuẩn từ cả Mảng lẫn Object', () => {
  // Test định dạng từ mảng [lng, lat, elev]
  assert.strictEqual(
    formatCoordinates([106.6297, 10.8231, 15]),
    'Long: 106.6297, Lat: 10.8231, Elev: 15'
  );

  // Test định dạng từ object { x, y, z }
  assert.strictEqual(
    formatCoordinates({ x: 105.8342, y: 21.0278, z: 25 }),
    'Long: 105.8342, Lat: 21.0278, Elev: 25'
  );

  // Tọa độ bằng 0 là hợp lệ (không bị nhầm thành mặc định do falsy)
  assert.strictEqual(
    formatCoordinates([0, 0, 0]),
    'Long: 0, Lat: 0, Elev: 0'
  );

  // Thiếu elevation
  assert.strictEqual(
    formatCoordinates({ x: 100.5, y: 13.7 }),
    'Long: 100.5, Lat: 13.7, Elev: 0'
  );

  // Trường hợp nullish hoặc không hợp lệ
  assert.strictEqual(formatCoordinates(null), 'Long: 0, Lat: 0, Elev: 0');
});

// ==============================================================================
// BÀI 2: SAFE NAVIGATION & PHÂN GIẢI CẤU HÌNH HỆ THỐNG
// ==============================================================================

test('Bài 2.1: getNestedConfig truy xuất an toàn và phân biệt chính xác nullish với falsy', () => {
  const config = {
    app: {
      server: {
        port: 8080,
        debug: false,
        timeout: 0,
        banner: '',
      },
    },
    cluster: {
      nodes: [
        { id: 'node-1', ip: '10.0.0.1' },
        { id: 'node-2', ip: '10.0.0.2' },
      ],
    },
  };

  // Truy xuất thành công
  assert.strictEqual(getNestedConfig(config, ['app', 'server', 'port']), 8080);
  assert.strictEqual(getNestedConfig(config, ['cluster', 'nodes', 1, 'ip']), '10.0.0.2');

  // Giá trị falsy (false, 0, '') phải được giữ nguyên vẹn
  assert.strictEqual(getNestedConfig(config, ['app', 'server', 'debug'], true), false);
  assert.strictEqual(getNestedConfig(config, ['app', 'server', 'timeout'], 5000), 0);
  assert.strictEqual(getNestedConfig(config, ['app', 'server', 'banner'], 'Welcome'), '');

  // Thuộc tính không tồn tại trả về defaultValue
  assert.strictEqual(getNestedConfig(config, ['app', 'database', 'host'], '127.0.0.1'), '127.0.0.1');
  assert.strictEqual(getNestedConfig(null, ['app', 'server'], 'fallback'), 'fallback');
});

test('Bài 2.2: extractServiceInfo trích xuất an toàn dữ liệu phản hồi từ Microservice', () => {
  const successResponse = {
    status: 200,
    data: {
      success: true,
      items: [{ name: 'Order #101' }, { name: 'Order #102' }],
    },
    meta: {
      service: { name: 'order-service' },
    },
  };

  assert.deepStrictEqual(extractServiceInfo(successResponse), {
    statusCode: 200,
    isSuccess: true,
    serviceName: 'order-service',
    items: [{ name: 'Order #101' }, { name: 'Order #102' }],
    firstItemName: 'Order #101',
    errorCode: null,
  });

  const failureResponse = {
    status: 404,
    error: { code: 'ORDER_NOT_FOUND', message: 'Item does not exist' },
  };

  assert.deepStrictEqual(extractServiceInfo(failureResponse), {
    statusCode: 404,
    isSuccess: false,
    serviceName: 'unknown-service',
    items: [],
    firstItemName: null,
    errorCode: 'ORDER_NOT_FOUND',
  });

  // Không lỗi ngay cả khi response là null hoặc undefined
  assert.deepStrictEqual(extractServiceInfo(null), {
    statusCode: 500,
    isSuccess: false,
    serviceName: 'unknown-service',
    items: [],
    firstItemName: null,
    errorCode: null,
  });
});

// ==============================================================================
// BÀI 3: HỢP NHẤT CẤU HÌNH ĐA TẦNG & EVENT DISPATCHER GỌN NHẸ
// ==============================================================================

test('Bài 3.1: mergeServerOptions hợp nhất cấu hình với 1 tầng nested object và giữ nguyên tính bất biến', () => {
  const defaultOptions = {
    env: 'production',
    port: 3000,
    db: { host: 'localhost', port: 5432, ssl: false },
    features: { auth: true, telemetry: false },
  };

  const customOptions = {
    port: 8080,
    db: { host: 'remote-pg.internal', ssl: true },
    features: { telemetry: true },
    corsOrigins: ['https://example.com'],
  };

  const merged = mergeServerOptions(defaultOptions, customOptions);

  assert.deepStrictEqual(merged, {
    env: 'production',
    port: 8080,
    db: { host: 'remote-pg.internal', port: 5432, ssl: true },
    features: { auth: true, telemetry: true },
    corsOrigins: ['https://example.com'],
  });

  // Kiểm tra tính bất biến của defaultOptions
  assert.strictEqual(defaultOptions.port, 3000);
  assert.strictEqual(defaultOptions.db.host, 'localhost');
  assert.strictEqual(defaultOptions.db.ssl, false);
});

test('Bài 3.2: createEventDispatcher truyền nhận vô số tham số và quản lý sự kiện', () => {
  const dispatcher = createEventDispatcher();
  const receivedLogs = [];

  dispatcher
    .on('log', (level, msg, code) => {
      receivedLogs.push(`[${level}] ${msg} (code: ${code})`);
    })
    .on('log', (level, msg) => {
      receivedLogs.push(`Second handler: ${msg}`);
    });

  const count = dispatcher.emit('log', 'ERROR', 'Database timeout', 504);
  assert.strictEqual(count, 2);
  assert.strictEqual(receivedLogs.length, 2);
  assert.strictEqual(receivedLogs[0], '[ERROR] Database timeout (code: 504)');
  assert.strictEqual(receivedLogs[1], 'Second handler: Database timeout');

  // Sự kiện chưa được đăng ký trả về 0 handler
  assert.strictEqual(dispatcher.emit('unknown_event', 1, 2, 3), 0);

  // Danh sách sự kiện đã đăng ký
  assert.deepStrictEqual(dispatcher.getRegisteredEvents(), ['log']);
});
