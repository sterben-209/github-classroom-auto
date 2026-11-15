/**
 * ==============================================================================
 * BÀI TẬP LUYỆN TẬP TUẦN 02: LÀM QUEN CÚ PHÁP ES6+
 * Chủ đề: 8 Dạng bài tập mini giúp mở rộng tầm mắt và viết nhiều cho quen tay
 * ==============================================================================
 */

/**
 * 1. Hoán đổi vị trí của 2 biến bằng cú pháp Array Destructuring [a, b] = [b, a].
 */
function swapCoordinates(x, y) {
  // TODO: Học viên cài đặt hàm tại đây
  throw new Error("Chưa cài đặt hàm swapCoordinates");
}

/**
 * 2. Trích xuất thông tin người dùng bằng Object Destructuring:
 *    - name -> fullName (mặc định "Người dùng ẩn danh")
 *    - email (mặc định "Chưa có email")
 *    - address.city (mặc định "Chưa rõ")
 *    - role (mặc định "member")
 */
function extractUserBio(user) {
  // TODO: Học viên cài đặt hàm tại đây
  throw new Error("Chưa cài đặt hàm extractUserBio");
}

/**
 * 3. Destructuring ngay tại tham số hàm với giá trị mặc định cho toàn bộ tham số `= {}`.
 */
function createProductCard({ title = "Chưa có tên", price = 0, isAvailable = true } = {}) {
  // TODO: Học viên cài đặt hàm tại đây
  throw new Error("Chưa cài đặt hàm createProductCard");
}

/**
 * 4. Gộp các danh sách mua sắm bằng Spread Operator kết hợp Rest Parameter.
 */
function mergeShoppingLists(personalList = [], sharedList = [], ...extraItems) {
  // TODO: Học viên cài đặt hàm tại đây
  throw new Error("Chưa cài đặt hàm mergeShoppingLists");
}

/**
 * 5. Kế thừa và ghi đè cấu hình object bằng Spread Operator (đảm bảo Immutability).
 */
function updateUserSettings(defaultSettings = {}, userOverrides = {}) {
  // TODO: Học viên cài đặt hàm tại đây
  throw new Error("Chưa cài đặt hàm updateUserSettings");
}

/**
 * 6. Loại bỏ password và token bằng Rest trong Object Destructuring.
 */
function sanitizeAccount(account) {
  // TODO: Học viên cài đặt hàm tại đây
  throw new Error("Chưa cài đặt hàm sanitizeAccount");
}

/**
 * 7. Lấy điểm số người chơi an toàn bằng ?. và ?? (bảo vệ điểm 0 không bị mất).
 */
function getPlayerScore(player) {
  // TODO: Học viên cài đặt hàm tại đây
  throw new Error("Chưa cài đặt hàm getPlayerScore");
}

/**
 * 8. Gọi phương thức động an toàn bằng Optional Chaining ?.[method]?.(...args) và fallback về null bằng ??.
 */
function safeExecute(service, methodName, ...args) {
  // TODO: Học viên cài đặt hàm tại đây
  throw new Error("Chưa cài đặt hàm safeExecute");
}

module.exports = {
  swapCoordinates,
  extractUserBio,
  createProductCard,
  mergeShoppingLists,
  updateUserSettings,
  sanitizeAccount,
  getPlayerScore,
  safeExecute,
};
