// ==============================================================================
// BÀI 1: QUẢN LÝ STATE BẰNG CLOSURE & BẪY VÒNG LẶP SCOPE
// ==============================================================================

function createCounter(initialValue = 0, step = 1) {
  let count = initialValue;

  return {
    increment: () => {
      count += step;
      return count;
    },
    decrement: () => {
      count -= step;
      return count;
    },
    getValue: () => count,
    reset: () => {
      count = initialValue;
      return count;
    },
  };
}

function createBatchHandlers(count, prefix = 'task') {
  if (count <= 0) return [];

  const handlers = [];
  for (let i = 0; i < count; i++) {
    handlers.push(() => `${prefix}-${i}`);
  }
  return handlers;
}

// ==============================================================================
// BÀI 2: TEMPLATE LITERALS & CHUẨN HÓA CHUỖI TRONG BACKEND
// ==============================================================================

function formatLogMessage(level, message, metadata = {}) {
  const upperLevel = level.toUpperCase();
  const hasMetadata =
    metadata !== null &&
    typeof metadata === 'object' &&
    Object.keys(metadata).length > 0;

  if (hasMetadata) {
    return `[${upperLevel}] ${message} | metadata: ${JSON.stringify(metadata)}`;
  }

  return `[${upperLevel}] ${message}`;
}

function cleanQueryString(sql) {
  return sql
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line !== '')
    .join(' ');
}

// ==============================================================================
// BÀI 3: MODULE CẤU HÌNH BACKEND AN TOÀN (IMMUTABLE CONFIG)
// ==============================================================================

function createConfigManager(initialConfig = {}) {
  // Clone object đầu vào để tránh việc bên ngoài sửa object gốc làm ảnh hưởng state bên trong
  const config = { ...initialConfig };

  return {
    get(key, defaultValue = null) {
      if (Object.prototype.hasOwnProperty.call(config, key) && config[key] !== undefined) {
        return config[key];
      }
      return defaultValue;
    },
    set(key, value) {
      config[key] = value;
    },
    has(key) {
      return Object.prototype.hasOwnProperty.call(config, key);
    },
    exportConfig() {
      return Object.freeze({ ...config });
    },
  };
}

module.exports = {
  createCounter,
  createBatchHandlers,
  formatLogMessage,
  cleanQueryString,
  createConfigManager,
};