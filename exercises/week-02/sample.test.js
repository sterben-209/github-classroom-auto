const test = require('node:test');
const assert = require('node:assert');
const {
  swapCoordinates,
  extractUserBio,
  createProductCard,
  mergeShoppingLists,
  updateUserSettings,
  sanitizeAccount,
  getPlayerScore,
  safeExecute,
} = require('./index');

test('Dạng 1: swapCoordinates hoán đổi vị trí 2 giá trị', () => {
  assert.deepStrictEqual(swapCoordinates(10, 20), [20, 10]);
  assert.deepStrictEqual(swapCoordinates('Hà Nội', 'Sài Gòn'), ['Sài Gòn', 'Hà Nội']);
});

test('Dạng 2: extractUserBio trích xuất, đổi tên và gán giá trị mặc định cho Object', () => {
  const user = {
    name: 'Minh Anh',
    email: 'minh@gmail.com',
    address: { city: 'Đà Nẵng' },
    role: 'admin',
  };
  assert.deepStrictEqual(extractUserBio(user), {
    fullName: 'Minh Anh',
    email: 'minh@gmail.com',
    city: 'Đà Nẵng',
    role: 'admin',
  });
  assert.deepStrictEqual(extractUserBio({}), {
    fullName: 'Người dùng ẩn danh',
    email: 'Chưa có email',
    city: 'Chưa rõ',
    role: 'member',
  });
});

test('Dạng 3: createProductCard destructuring tại tham số hàm', () => {
  assert.strictEqual(
    createProductCard({ title: 'Bàn phím cơ', price: 500000, isAvailable: true }),
    'Bàn phím cơ - Giá: 500000đ (Còn hàng)'
  );
  assert.strictEqual(
    createProductCard(),
    'Chưa có tên - Giá: 0đ (Còn hàng)'
  );
});

test('Dạng 4: mergeShoppingLists gộp mảng với Spread và Rest', () => {
  const merged = mergeShoppingLists(['Táo', 'Chuối'], ['Sữa'], 'Bánh mì', 'Trứng');
  assert.deepStrictEqual(merged, ['Táo', 'Chuối', 'Sữa', 'Bánh mì', 'Trứng']);
});

test('Dạng 5: updateUserSettings kế thừa và ghi đè cấu hình object', () => {
  const def = { theme: 'light', volume: 50 };
  const custom = { theme: 'dark', volume: 80 };
  assert.deepStrictEqual(updateUserSettings(def, custom), { theme: 'dark', volume: 80 });
  assert.strictEqual(def.theme, 'light'); // Immutability
});

test('Dạng 6: sanitizeAccount loại bỏ password và token bằng Rest', () => {
  const acc = { id: 1, username: 'nam_dev', password: '123', token: 'xyz', role: 'admin' };
  assert.deepStrictEqual(sanitizeAccount(acc), { id: 1, username: 'nam_dev', role: 'admin' });
});

test('Dạng 7: getPlayerScore bảo vệ điểm số 0 và tránh crash khi dữ liệu null', () => {
  assert.strictEqual(
    getPlayerScore({ name: 'PlayerOne', stats: { score: 100 } }),
    'PlayerOne: 100 điểm'
  );
  assert.strictEqual(
    getPlayerScore({ name: 'Rookie', stats: { score: 0 } }),
    'Rookie: 0 điểm'
  );
  assert.strictEqual(getPlayerScore(null), 'Khách: 0 điểm');
});

test('Dạng 8: safeExecute gọi phương thức an toàn bằng ?.()', () => {
  const math = { add: (a, b) => a + b };
  assert.strictEqual(safeExecute(math, 'add', 5, 10), 15);
  assert.strictEqual(safeExecute(math, 'divide', 10, 2), null);
  assert.strictEqual(safeExecute(null, 'add', 1, 2), null);
});
