// ==========================================
// BÀI TẬP THỰC HÀNH: TUẦN 02
// Chủ đề: Destructuring, Rest/Spread, Optional Chaining
// ==========================================

/**
 * 1. Hàm tính tổng của vô số tham số truyền vào sử dụng Rest parameter
 * @param  {...number} numbers
 * @returns {number}
 */
const sumAll = (...numbers) => {
  return numbers.reduce((total, number) => total + number, 0);
};

/**
 * 2. Hàm trích xuất thành phố từ thông tin user một cách an toàn (dùng Optional Chaining + Nullish Coalescing)
 * Nếu không có thành phố, trả về "Chưa xác định"
 * @param {object} user
 * @returns {string}
 */
const getCity = (user) => {
  return user?.city ?? "Chưa xác định"
};

/**
 * 3. Hàm gộp 2 object và ghi đè giá trị nếu trùng (dùng Spread Operator)
 * @param {object} obj1
 * @param {object} obj2
 * @returns {object}
 */
const mergeConfig = (obj1, obj2) => {
  return {
    ...obj1,
    ...obj2,
  };
};

module.exports = {
  sumAll,
  getCity,
  mergeConfig,
};