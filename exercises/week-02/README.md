# 🏋️ BÀI TẬP LUYỆN TẬP TUẦN 02: LÀM QUEN CÚ PHÁP ES6+
**Mục đích:** Giúp bạn làm quen, mở rộng tầm mắt về các dạng áp dụng thực tế và gõ code nhiều cho quen tay **trước khi bước vào làm Bài kiểm tra chính thức**.

👉 **Đặc điểm**: Mỗi bài tập đều **rất ngắn gọn (chỉ 1 – 3 dòng code)**, không đánh đố thuật toán hay vòng lặp phức tạp.

---

## 📂 Hướng Dẫn Làm Bài Tập
1. Mở file **`index.js`** trong thư mục này và hoàn thành 8 hàm bên dưới.
2. Chạy lệnh kiểm tra bài tập tại máy:
   ```bash
   node --test exercises/week-02
   # Hoặc: npm run ex2
   ```

---

## 📝 DANH SÁCH 8 BÀI TẬP MINI

### Dạng 1: `swapCoordinates(x, y)` (Array Destructuring)
- **Mô tả**: Hoán đổi vị trí giữa kinh độ và vĩ độ (hoặc 2 biến bất kỳ) bằng cú pháp Array Destructuring `[a, b] = [b, a]`.
- **Trả về**: Mảng mới chứa 2 giá trị đã được đổi chỗ `[y, x]`.
- *Ví dụ:*
  ```javascript
  swapCoordinates(10, 20); // => [20, 10]
  swapCoordinates("Hà Nội", "Sài Gòn"); // => ["Sài Gòn", "Hà Nội"]
  ```

---

### Dạng 2: `extractUserBio(user)` (Object Destructuring Nâng Cao)
- **Mô tả**: Trích xuất và chuẩn hóa thông tin hiển thị của hồ sơ người dùng bằng Object Destructuring:
  - Đổi tên `name` thành `fullName` (mặc định là `"Người dùng ẩn danh"`).
  - Trích xuất `email` (mặc định là `"Chưa có email"`).
  - Trích xuất `city` từ thuộc tính lồng nhau `address: { city = "Chưa rõ" }` (Nested Destructuring).
  - Trích xuất `role` (mặc định là `"member"`).
- **Trả về**: Object mới `{ fullName, email, city, role }`.
- *Ví dụ:*
  ```javascript
  const user = {
    name: "Minh Anh",
    email: "minh@gmail.com",
    address: { city: "Đà Nẵng" }
  };
  extractUserBio(user);
  // => { fullName: "Minh Anh", email: "minh@gmail.com", city: "Đà Nẵng", role: "member" }
  ```

---

### Dạng 3: `createProductCard({ title, price, isAvailable } = {})` (Tham Số Hàm Destructuring)
- **Mô tả**: Destructuring trực tiếp tại danh sách tham số hàm kèm giá trị mặc định cho toàn bộ tham số `= {}`.
- **Tham số**:
  - `title`: mặc định `"Chưa có tên"`
  - `price`: mặc định `0`
  - `isAvailable`: mặc định `true`
- **Trả về**: Chuỗi định dạng: `${title} - Giá: ${price}đ (${isAvailable ? "Còn hàng" : "Hết hàng"})`.
- *Ví dụ:*
  ```javascript
  createProductCard({ title: "Bàn phím cơ", price: 500000, isAvailable: true });
  // => "Bàn phím cơ - Giá: 500000đ (Còn hàng)"

  createProductCard();
  // => "Chưa có tên - Giá: 0đ (Còn hàng)" (Không bị crash!)
  ```

---

### Dạng 4: `mergeShoppingLists(personalList, sharedList, ...extraItems)` (Spread Mảng & Rest Parameter)
- **Mô tả**: Gộp nhiều danh sách mua sắm thành một mảng duy nhất bằng Spread Operator `[...personalList, ...sharedList, ...extraItems]`.
- **Trả về**: Mảng mới gộp toàn bộ các phần tử.
- *Ví dụ:*
  ```javascript
  mergeShoppingLists(["Táo", "Chuối"], ["Sữa"], "Bánh mì", "Trứng");
  // => ["Táo", "Chuối", "Sữa", "Bánh mì", "Trứng"]
  ```

---

### Dạng 5: `updateUserSettings(defaultSettings, userOverrides)` (Ghi Đè Object Bất Biến)
- **Mô tả**: Dùng Spread Operator để tạo object mới kế thừa cấu hình mặc định và ghi đè cấu hình tùy chỉnh của người dùng: `{ ...defaultSettings, ...userOverrides }`.
- **Yêu cầu tính bất biến**: Không được sửa đổi (mutate) hai object truyền vào.
- *Ví dụ:*
  ```javascript
  const defaults = { theme: "light", volume: 50 };
  const custom = { theme: "dark", volume: 80 };
  updateUserSettings(defaults, custom);
  // => { theme: "dark", volume: 80 }
  // defaults.theme vẫn là "light" (không bị thay đổi!)
  ```

---

### Dạng 6: `sanitizeAccount(account)` (Rest Trong Object Destructuring)
- **Mô tả**: Dùng toán tử Rest trong Object Destructuring để loại bỏ các trường nhạy cảm (`password`, `token`):
  `const { password, token, ...publicData } = account;`
- **Trả về**: Object `publicData` (chứa toàn bộ thông tin ngoại trừ password và token). Nếu `account` là nullish, trả về `{}`.
- *Ví dụ:*
  ```javascript
  const acc = { id: 1, username: "nam_dev", password: "123", token: "xyz", role: "admin" };
  sanitizeAccount(acc);
  // => { id: 1, username: "nam_dev", role: "admin" }
  ```

---

### Dạng 7: `getPlayerScore(player)` (Safe Navigation & Nullish Coalescing)
- **Mô tả**: Truy cập dữ liệu lồng nhau an toàn với `?.` và dùng `??` để bảo vệ điểm số `0` hợp lệ của người chơi mới (không dùng `||` vì sẽ biến `0` thành giá trị mặc định).
  - Tên người chơi: `player?.name ?? "Khách"`
  - Điểm số: `player?.stats?.score ?? 0`
- **Trả về**: Chuỗi định dạng: `${playerName}: ${playerScore} điểm`.
- *Ví dụ:*
  ```javascript
  getPlayerScore({ name: "Rookie", stats: { score: 0 } });
  // => "Rookie: 0 điểm" (Bảo toàn số 0!)

  getPlayerScore(null);
  // => "Khách: 0 điểm"
  ```

---

### Dạng 8: `safeExecute(service, methodName, ...args)` (Optional Chaining Gọi Hàm)
- **Mô tả**: Gọi một phương thức dịch vụ động an toàn bằng `service?.[methodName]?.(...args)`. Nếu phương thức không tồn tại hoặc gọi không thành công, trả về `null`.
- *Ví dụ:*
  ```javascript
  const math = { add: (a, b) => a + b };
  safeExecute(math, "add", 10, 20);      // => 30
  safeExecute(math, "subtract", 10, 20); // => null (không bị crash!)
  ```
