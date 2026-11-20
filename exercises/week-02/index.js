/**
 * ==============================================================================
 * BÀI TẬP LUYỆN TẬP TUẦN 02: LÀM QUEN CÚ PHÁP ES6+
 * Chủ đề: Destructuring, Rest & Spread Operator, Optional Chaining, Nullish Coalescing
 * ==============================================================================
 * 
 * HƯỚNG DẪN:
 * 1. Đọc kỹ yêu cầu đề bài, Input, Output và Ví dụ trong exercises/week-02/README.md.
 * 2. Cài đặt các hàm bên dưới theo đúng đặc tả kỹ thuật.
 * 3. Chạy lệnh: `npm run ex2` (hoặc `node --test exercises/week-02`) để kiểm tra.
 */

// ==============================================================================
// DẠNG 1: HOÁN ĐỔI BIẾN (ARRAY DESTRUCTURING)
// ==============================================================================

/**
 * Hoán đổi vị trí của 2 biến bằng kỹ thuật Array Destructuring.
 * 
 * @param {any} x - Giá trị thứ nhất
 * @param {any} y - Giá trị thứ hai
 * @returns {Array} Mảng gồm 2 phần tử [y, x] đã được đổi vị trí cho nhau
 */
function swapCoordinates(x, y) {
  // TODO: Học viên cài đặt hàm tại đây
  throw new Error("Chưa cài đặt hàm swapCoordinates");
}

// ==============================================================================
// DẠNG 2: BÓC TÁCH HỒ SƠ NGƯỜI DÙNG (OBJECT DESTRUCTURING)
// ==============================================================================

/**
 * Trích xuất và chuẩn hóa thông tin hiển thị của hồ sơ người dùng.
 * 
 * @param {object} user - Đối tượng chứa thông tin người dùng:
 *   - name (string, tùy chọn): Tên người dùng
 *   - email (string, tùy chọn): Địa chỉ email
 *   - address (object, tùy chọn): Chứa thuộc tính city (string)
 *   - role (string, tùy chọn): Vai trò người dùng
 * @returns {object} Đối tượng mới gồm đúng 4 thuộc tính:
 *   - fullName: lấy từ name; nếu không có thì mặc định 'Người dùng ẩn danh'
 *   - email: lấy từ email; nếu không có thì mặc định 'Chưa có email'
 *   - city: lấy từ address.city; nếu không có thì mặc định 'Chưa rõ'
 *   - role: lấy từ role; nếu không có thì mặc định 'member'
 */
function extractUserBio(user) {
  // TODO: Học viên cài đặt hàm tại đây
  throw new Error("Chưa cài đặt hàm extractUserBio");
}

// ==============================================================================
// DẠNG 3: ĐỊNH DẠNG THẺ SẢN PHẨM (PARAM DESTRUCTURING & DEFAULT VALUES)
// ==============================================================================

/**
 * Tạo chuỗi hiển thị thẻ thông tin sản phẩm, áp dụng Destructuring tại danh sách tham số.
 * 
 * @param {object} [productInfo={}] - Đối tượng thông tin sản phẩm:
 *   - title (string): Tên sản phẩm (mặc định 'Chưa có tên')
 *   - price (number): Giá bán sản phẩm (mặc định 0)
 *   - isAvailable (boolean): Còn hàng hay không (mặc định true)
 * @returns {string} Chuỗi format: `${title} - Giá: ${price}đ (${isAvailable ? "Còn hàng" : "Hết hàng"})`
 *   LƯU Ý: Nếu gọi hàm không truyền đối số, hàm vẫn không bị crash và trả về giá trị mặc định.
 */
function createProductCard(productInfo) {
  // TODO: Học viên cài đặt hàm tại đây (hãy áp dụng destructuring ngay tại tham số hàm)
  throw new Error("Chưa cài đặt hàm createProductCard");
}

// ==============================================================================
// DẠNG 4: HỢP NHẤT DANH SÁCH MUA SẮM (SPREAD ARRAY & REST PARAMETER)
// ==============================================================================

/**
 * Gộp nhiều danh sách mua sắm và các mặt hàng lẻ vào một mảng duy nhất.
 * 
 * @param {Array} [personalList=[]] - Danh sách mặt hàng cá nhân
 * @param {Array} [sharedList=[]] - Danh sách mặt hàng chung
 * @param {...string} extraItems - Các mặt hàng lẻ bổ sung được truyền thêm
 * @returns {Array} Mảng mới chứa tất cả các phần tử đã được gộp phẳng theo thứ tự
 */
function mergeShoppingLists(personalList, sharedList, ...extraItems) {
  // TODO: Học viên cài đặt hàm tại đây
  throw new Error("Chưa cài đặt hàm mergeShoppingLists");
}

// ==============================================================================
// DẠNG 5: KẾ THỪA & GHI ĐÈ CẤU HÌNH (SPREAD OBJECT & IMMUTABILITY)
// ==============================================================================

/**
 * Kế thừa cấu hình mặc định và ghi đè các thiết lập tùy biến của người dùng.
 * 
 * @param {object} [defaultSettings={}] - Cấu hình mặc định ban đầu
 * @param {object} [userOverrides={}] - Cấu hình tùy chỉnh của người dùng
 * @returns {object} Đối tượng cấu hình mới sau khi hợp nhất.
 *   LƯU Ý: Không được làm thay đổi thuộc tính của 2 đối tượng gốc defaultSettings và userOverrides.
 */
function updateUserSettings(defaultSettings, userOverrides) {
  // TODO: Học viên cài đặt hàm tại đây
  throw new Error("Chưa cài đặt hàm updateUserSettings");
}

// ==============================================================================
// DẠNG 6: LOẠI BỎ THUỘC TÍNH NHẠY CẢM (REST IN OBJECT DESTRUCTURING)
// ==============================================================================

/**
 * Làm sạch dữ liệu tài khoản người dùng, loại bỏ các trường nhạy cảm password và token.
 * 
 * @param {object|null|undefined} account - Đối tượng tài khoản người dùng
 * @returns {object} Đối tượng mới chứa toàn bộ thông tin ngoại trừ password và token.
 *   Nếu account là null hoặc undefined, trả về object rỗng {}.
 */
function sanitizeAccount(account) {
  // TODO: Học viên cài đặt hàm tại đây
  throw new Error("Chưa cài đặt hàm sanitizeAccount");
}

// ==============================================================================
// DẠNG 7: LẤY ĐIỂM SỐ NGƯỜI CHƠI AN TOÀN (OPTIONAL CHAINING & NULLISH COALESCING)
// ==============================================================================

/**
 * Hiển thị điểm số người chơi an toàn, tránh crash và bảo vệ điểm số 0 hợp lệ.
 * 
 * @param {object|null|undefined} player - Đối tượng người chơi, có thể chứa { name, stats: { score } }
 * @returns {string} Chuỗi định dạng: `${playerName}: ${playerScore} điểm`
 *   - playerName: lấy từ player.name; nếu nullish thì mặc định 'Khách'
 *   - playerScore: lấy từ player.stats.score; nếu nullish thì mặc định 0
 *   LƯU Ý: Điểm 0 là hợp lệ, không được dùng toán tử || vì sẽ làm mất số 0.
 */
function getPlayerScore(player) {
  // TODO: Học viên cài đặt hàm tại đây
  throw new Error("Chưa cài đặt hàm getPlayerScore");
}

// ==============================================================================
// DẠNG 8: GỌI PHƯƠNG THỨC ĐỘNG AN TOÀN (SAFE METHOD CALLING)
// ==============================================================================

/**
 * Thực thi an toàn một phương thức trên đối tượng dịch vụ có thể không tồn tại.
 * 
 * @param {object|null|undefined} service - Đối tượng dịch vụ chứa các hàm
 * @param {string} methodName - Tên phương thức cần gọi
 * @param {...any} args - Danh sách các đối số truyền vào phương thức
 * @returns {any} Kết quả trả về của phương thức, hoặc null nếu service là nullish / phương thức không tồn tại
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
