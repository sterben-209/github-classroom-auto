/**
 * ==============================================================================
 * BÀI KIỂM TRA THỰC HÀNH TUẦN 02: DESTRUCTURING, REST/SPREAD, OPTIONAL CHAINING & NULLISH COALESCING
 * Chủ đề: Destructuring, Rest & Spread Operator, Optional Chaining (?.), Nullish Coalescing (??)
 * ==============================================================================
 * 
 * HƯỚNG DẪN:
 * 1. Đọc kỹ yêu cầu đề bài trong assignments/week-02/README.md.
 * 2. Cài đặt các hàm bên dưới theo đúng đặc tả kỹ thuật.
 * 3. Chạy lệnh: `node --test assignments/week-02/sample.test.js` để kiểm tra.
 */

// ==============================================================================
// BÀI 1: CHUẨN HÓA PAYLOAD API & XỬ LÝ TỌA ĐỘ GIS
// ==============================================================================

/**
 * Chuẩn hóa payload người dùng gửi lên API, loại bỏ trường nhạy cảm, gom extraInfo.
 * 
 * @param {object} payload - Dữ liệu client gửi lên
 * @returns {object|null} Đối tượng đã chuẩn hóa hoặc null nếu payload không hợp lệ:
 *   - username: chuỗi đã trim; nếu không có hoặc rỗng thì mặc định 'anonymous'
 *   - email: chuỗi chữ thường đã trim; nếu không có thì mặc định ''
 *   - role: giữ nguyên; nếu nullish thì mặc định 'member'
 *   - extraInfo: gom toàn bộ thuộc tính còn lại sau khi bỏ password, salt, secretToken, isAdmin
 *   LƯU Ý: Không được làm đột biến (mutate) payload ban đầu!
 */
function sanitizeUserPayload(payload) {
  // TODO: Học viên cài đặt hàm tại đây
  throw new Error("Chưa cài đặt hàm sanitizeUserPayload");
}

/**
 * Định dạng tọa độ GIS từ mảng [lng, lat, elev] hoặc object { x, y, z }.
 * 
 * @param {Array|object|any} point - Dữ liệu tọa độ
 * @returns {string} Chuỗi định dạng: `Long: ${lng}, Lat: ${lat}, Elev: ${elev}`
 *   - Mặc định các thành phần là 0 nếu thiếu, null, undefined hoặc không phải số.
 *   - Lưu ý: Số 0 là tọa độ hợp lệ, không được để nhầm lẫn thành giá trị mặc định.
 */
function formatCoordinates(point) {
  // TODO: Học viên cài đặt hàm tại đây
  throw new Error("Chưa cài đặt hàm formatCoordinates");
}

// ==============================================================================
// BÀI 2: SAFE NAVIGATION & PHÂN GIẢI CẤU HÌNH HỆ THỐNG
// ==============================================================================

/**
 * Truy xuất an toàn giá trị cấu hình lồng nhau sâu qua mảng đường dẫn pathArray.
 * 
 * @param {any} config - Object cấu hình hoặc bất kỳ giá trị nào
 * @param {Array<string|number>} pathArray - Mảng các khóa/chỉ số truy cập
 * @param {any} [defaultValue=null] - Giá trị fallback khi gặp nullish hoặc không tìm thấy
 * @returns {any} Giá trị cấu hình tìm được hoặc defaultValue:
 *   - Nếu giá trị tại đích là 0, false, '' hoặc NaN thì vẫn phải trả về nguyên vẹn (dùng ??).
 */
function getNestedConfig(config, pathArray, defaultValue = null) {
  // TODO: Học viên cài đặt hàm tại đây
  throw new Error("Chưa cài đặt hàm getNestedConfig");
}

/**
 * Trích xuất an toàn thông tin từ response của Microservice / Third-party API.
 * 
 * @param {any} serviceResponse - Phản hồi từ dịch vụ bên ngoài
 * @returns {object} Đối tượng an toàn chứa các thuộc tính:
 *   - statusCode: số mã trạng thái (mặc định 500)
 *   - isSuccess: boolean (mặc định false)
 *   - serviceName: tên dịch vụ (mặc định 'unknown-service')
 *   - items: mảng dữ liệu (mặc định [])
 *   - firstItemName: tên của item đầu tiên (mặc định null)
 *   - errorCode: mã lỗi (mặc định null)
 */
function extractServiceInfo(serviceResponse) {
  // TODO: Học viên cài đặt hàm tại đây
  throw new Error("Chưa cài đặt hàm extractServiceInfo");
}

// ==============================================================================
// BÀI 3: HỢP NHẤT CẤU HÌNH ĐA TẦNG & EVENT DISPATCHER GỌN NHẸ
// ==============================================================================

/**
 * Hợp nhất cấu hình mặc định và cấu hình tùy chỉnh, hỗ trợ merge 1 tầng nested object.
 * 
 * @param {object} [defaultOptions={}] - Cấu hình mặc định
 * @param {object} [customOptions={}] - Cấu hình tùy chỉnh của người dùng
 * @returns {object} Cấu hình mới sau khi hợp nhất.
 *   - Bảo đảm tính bất biến: không làm thay đổi defaultOptions và customOptions gốc.
 */
function mergeServerOptions(defaultOptions = {}, customOptions = {}) {
  // TODO: Học viên cài đặt hàm tại đây
  throw new Error("Chưa cài đặt hàm mergeServerOptions");
}

/**
 * Khởi tạo bộ quản lý sự kiện (Event Dispatcher) gọn nhẹ hỗ trợ Rest & Spread.
 * 
 * @returns {object} Đối tượng quản lý sự kiện:
 *   - on(eventName, handler): Đăng ký hàm xử lý. Trả về chính đối tượng dispatcher (chaining).
 *   - emit(eventName, ...args): Kích hoạt sự kiện và truyền nguyên vẹn đối số. Trả về số handler đã chạy.
 *   - getRegisteredEvents(): Trả về mảng danh sách tên sự kiện có handler.
 */
function createEventDispatcher() {
  // TODO: Học viên cài đặt hàm tại đây
  throw new Error("Chưa cài đặt hàm createEventDispatcher");
}

module.exports = {
  sanitizeUserPayload,
  formatCoordinates,
  getNestedConfig,
  extractServiceInfo,
  mergeServerOptions,
  createEventDispatcher,
};
