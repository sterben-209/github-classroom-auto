# 🏋️ BÀI TẬP LUYỆN TẬP TUẦN 02: LÀM QUEN CÚ PHÁP ES6+
**Chủ đề:** Destructuring, Rest & Spread Operator, Optional Chaining (`?.`), Nullish Coalescing (`??`)  
**Mục tiêu:** Giúp học viên làm quen với các biến thể cú pháp thực tế trong Backend, hiểu rõ cấu trúc dữ liệu Input/Output và rèn luyện phản xạ code trước khi làm Bài kiểm tra chính thức.

---

## 📂 Hướng Dẫn Làm Bài
1. Mở file **`index.js`** trong thư mục này và hoàn thành 8 hàm theo đúng đặc tả kỹ thuật bên dưới.
2. Chạy lệnh kiểm tra bài làm tại terminal:
   ```bash
   npm run ex2
   # Hoặc: node --test exercises/week-02
   ```

---

## 📝 DANH SÁCH 8 BÀI TẬP MINI

### Dạng 1: `swapCoordinates(x, y)`
- **Mục tiêu**: Hoán đổi vị trí giữa 2 biến sử dụng cơ chế Destructuring.
- **Input**:
  - `x` (`any`): Giá trị thứ nhất (số, chuỗi, tọa độ...).
  - `y` (`any`): Giá trị thứ hai (số, chuỗi, tọa độ...).
- **Yêu cầu xử lý**:
  - Sử dụng cú pháp Array Destructuring để hoán đổi vị trí của `x` và `y` mà không khai báo biến tạm thời trung gian (`temp`).
- **Output**:
  - Mảng gồm 2 phần tử `[y, x]`, trong đó giá trị ban đầu của `y` đứng ở vị trí đầu tiên và `x` đứng ở vị trí thứ hai.
- **Ví dụ**:
  ```javascript
  swapCoordinates(10, 20); // => [20, 10]
  swapCoordinates("Hà Nội", "Sài Gòn"); // => ["Sài Gòn", "Hà Nội"]
  ```

---

### Dạng 2: `extractUserBio(user)`
- **Mục tiêu**: Bóc tách và chuẩn hóa dữ liệu hồ sơ người dùng từ cơ sở dữ liệu.
- **Input**:
  - `user` (`object`): Đối tượng chứa thông tin người dùng, có thể có hoặc khuyết thiếu các trường sau:
    - `name` (`string`): Tên người dùng.
    - `email` (`string`): Địa chỉ email.
    - `address` (`object`): Đối tượng địa chỉ, chứa thuộc tính `city` (`string`). Thuộc tính `address` có thể bị thiếu (`undefined`).
    - `role` (`string`): Vai trò người dùng trong hệ thống.
- **Yêu cầu xử lý**:
  - Sử dụng Object Destructuring kết hợp đổi tên biến và gán giá trị mặc định:
    - Đổi tên `name` thành thuộc tính `fullName`. Nếu không có `name` hoặc là `undefined`, gán mặc định là `"Người dùng ẩn danh"`.
    - Lấy `email`, nếu không có gán mặc định là `"Chưa có email"`.
    - Lấy `city` lồng bên trong `address`, nếu không có thuộc tính `address` hoặc `city` là `undefined`, gán mặc định là `"Chưa rõ"`.
    - Lấy `role`, nếu không có gán mặc định là `"member"`.
- **Output**:
  - Trả về 1 object mới gồm đúng 4 thuộc tính: `{ fullName, email, city, role }`.
- **Ví dụ**:
  ```javascript
  const user = {
    name: "Minh Anh",
    email: "minh@gmail.com",
    address: { city: "Đà Nẵng" },
    role: "admin"
  };
  extractUserBio(user);
  // => { fullName: "Minh Anh", email: "minh@gmail.com", city: "Đà Nẵng", role: "admin" }

  extractUserBio({});
  // => { fullName: "Người dùng ẩn danh", email: "Chưa có email", city: "Chưa rõ", role: "member" }
  ```

---

### Dạng 3: `createProductCard(productInfo)`
- **Mục tiêu**: Định dạng chuỗi hiển thị thẻ thông tin sản phẩm, áp dụng Destructuring tham số hàm.
- **Input**:
  - `productInfo` (`object`, tùy chọn): Đối tượng chứa thông tin sản phẩm, gồm:
    - `title` (`string`): Tên sản phẩm. Mặc định là `"Chưa có tên"`.
    - `price` (`number`): Giá bán sản phẩm. Mặc định là `0`.
    - `isAvailable` (`boolean`): Trạng thái còn hàng hay hết hàng. Mặc định là `true`.
  - *Lưu ý an toàn*: Khi gọi hàm mà không truyền bất kỳ đối số nào (`productInfo` là `undefined`), hàm vẫn không bị crash lỗi `TypeError`.
- **Yêu cầu xử lý**:
  - Áp dụng Destructuring trực tiếp tại danh sách tham số hàm kèm giá trị mặc định cho toàn bộ tham số.
  - Chuẩn hóa chuỗi hiển thị:
    - Nếu `isAvailable` là `true`: hiển thị trạng thái `"Còn hàng"`.
    - Nếu `isAvailable` là `false`: hiển thị trạng thái `"Hết hàng"`.
- **Output**:
  - Chuỗi định dạng (`string`): `${title} - Giá: ${price}đ (${trạngThái})`
- **Ví dụ**:
  ```javascript
  createProductCard({ title: "Bàn phím cơ", price: 500000, isAvailable: true });
  // => "Bàn phím cơ - Giá: 500000đ (Còn hàng)"

  createProductCard();
  // => "Chưa có tên - Giá: 0đ (Còn hàng)"
  ```

---

### Dạng 4: `mergeShoppingLists(personalList, sharedList, ...extraItems)`
- **Mục tiêu**: Hợp nhất các danh sách mua sắm độc lập và các mặt hàng lẻ vào một danh sách duy nhất.
- **Input**:
  - `personalList` (`Array`): Mảng các mặt hàng cá nhân (mặc định là `[]`).
  - `sharedList` (`Array`): Mảng các mặt hàng dùng chung (mặc định là `[]`).
  - `...extraItems` (các tham số còn lại): Số lượng tùy ý các món hàng lẻ bổ sung được truyền trực tiếp vào hàm dưới dạng từng chuỗi riêng biệt.
- **Yêu cầu xử lý**:
  - Sử dụng Spread Operator kết hợp Rest Parameters để tạo một mảng mới phẳng (1 cấp) chứa toàn bộ các phần tử theo thứ tự:
    1. Các phần tử từ `personalList`
    2. Các phần tử từ `sharedList`
    3. Các phần tử từ `extraItems`
- **Output**:
  - Mảng mới (`Array`) chứa tất cả mặt hàng đã được gộp.
- **Ví dụ**:
  ```javascript
  mergeShoppingLists(["Táo", "Chuối"], ["Sữa"], "Bánh mì", "Trứng");
  // => ["Táo", "Chuối", "Sữa", "Bánh mì", "Trứng"]
  ```

---

### Dạng 5: `updateUserSettings(defaultSettings, userOverrides)`
- **Mục tiêu**: Kế thừa cấu hình hệ thống mặc định và áp dụng cấu hình tùy biến của người dùng.
- **Input**:
  - `defaultSettings` (`object`): Đối tượng chứa cấu hình mặc định ban đầu.
  - `userOverrides` (`object`): Đối tượng chứa cấu hình người dùng muốn thay đổi hoặc ghi đè.
- **Yêu cầu xử lý**:
  - Tạo một đối tượng mới kế thừa toàn bộ thuộc tính từ `defaultSettings`.
  - Ghi đè các thuộc tính tương ứng nếu xuất hiện trong `userOverrides`.
  - **Yêu cầu tính bất biến (Immutability)**: Tuyệt đối KHÔNG được làm thay đổi thuộc tính của 2 đối tượng gốc `defaultSettings` và `userOverrides`.
- **Output**:
  - Đối tượng mới (`object`) đã được hợp nhất cấu hình.
- **Ví dụ**:
  ```javascript
  const defaults = { theme: "light", volume: 50 };
  const custom = { theme: "dark", volume: 80 };
  updateUserSettings(defaults, custom);
  // => { theme: "dark", volume: 80 }
  // defaults.theme vẫn là "light" (không bị mutate!)
  ```

---

### Dạng 6: `sanitizeAccount(account)`
- **Mục tiêu**: Loại bỏ dữ liệu nhạy cảm trước khi trả về thông tin tài khoản cho client.
- **Input**:
  - `account` (`object|null|undefined`): Đối tượng tài khoản người dùng, có thể chứa các trường như `id`, `username`, `password`, `token`, `role`,...
- **Yêu cầu xử lý**:
  - Sử dụng toán tử Rest trong Object Destructuring để tách bỏ 2 trường nhạy cảm: `password` và `token`.
  - Giữ lại toàn bộ các thuộc tính còn lại trong object kết quả.
  - Nếu `account` truyền vào là nullish (`null` hoặc `undefined`), hàm xử lý an toàn và trả về object rỗng `{}`.
- **Output**:
  - Đối tượng mới (`object`) chứa toàn bộ thông tin tài khoản sau khi đã loại bỏ `password` và `token`.
- **Ví dụ**:
  ```javascript
  const acc = { id: 1, username: "nam_dev", password: "123", token: "xyz", role: "admin" };
  sanitizeAccount(acc);
  // => { id: 1, username: "nam_dev", role: "admin" }

  sanitizeAccount(null);
  // => {}
  ```

---

### Dạng 7: `getPlayerScore(player)`
- **Mục tiêu**: Hiển thị bảng điểm người chơi an toàn, tránh crash và bảo toàn điểm số 0 hợp lệ.
- **Input**:
  - `player` (`object|null|undefined`): Đối tượng người chơi, có thể chứa `{ name, stats: { score } }`. Đối số này có thể bị truyền `null`, `undefined` hoặc object khuyết thiếu thuộc tính.
- **Yêu cầu xử lý**:
  - Lấy tên người chơi: nếu không tồn tại hoặc là nullish, sử dụng tên mặc định là `"Khách"`.
  - Lấy điểm số: trích xuất an toàn từ thuộc tính lồng nhau `player.stats.score`. Nếu không tồn tại hoặc là nullish, sử dụng điểm mặc định là `0`.
  - **Bẫy kiểm tra**: Điểm số `0` của người chơi mới là một giá trị hợp lệ, tuyệt đối KHÔNG được để số `0` bị biến thành giá trị mặc định khác do nhầm lẫn giữa Falsy (`||`) và Nullish (`??`).
  - Sử dụng Optional Chaining (`?.`) và Nullish Coalescing (`??`) để đảm bảo không bị văng lỗi crash khi `player` là `null`.
- **Output**:
  - Chuỗi định dạng (`string`): `${playerName}: ${playerScore} điểm`
- **Ví dụ**:
  ```javascript
  getPlayerScore({ name: "PlayerOne", stats: { score: 100 } });
  // => "PlayerOne: 100 điểm"

  getPlayerScore({ name: "Rookie", stats: { score: 0 } });
  // => "Rookie: 0 điểm" (Bảo toàn số 0!)

  getPlayerScore(null);
  // => "Khách: 0 điểm"
  ```

---

### Dạng 8: `safeExecute(service, methodName, ...args)`
- **Mục tiêu**: Thực thi an toàn một phương thức trên đối tượng dịch vụ có thể không tồn tại hoặc chưa được khởi tạo.
- **Input**:
  - `service` (`object|null|undefined`): Đối tượng dịch vụ chứa các phương thức nghiệp vụ. Có thể là `null` hoặc `undefined`.
  - `methodName` (`string`): Tên phương thức cần gọi (ví dụ: `"add"`, `"sendEmail"`).
  - `...args` (`any`): Danh sách các tham số cần truyền vào phương thức đó.
- **Yêu cầu xử lý**:
  - Kiểm tra an toàn xem đối tượng `service` có tồn tại hay không, và phương thức `methodName` có phải là một hàm hợp lệ hay không bằng Optional Chaining.
  - Nếu phương thức tồn tại và gọi được: truyền toàn bộ đối số `...args` vào phương thức và trả về kết quả của hàm đó.
  - Nếu `service` là nullish hoặc phương thức không tồn tại: dừng lại an toàn (không bị ném lỗi crash chương trình) và trả về `null`.
- **Output**:
  - Kết quả trả về của phương thức khi gọi thành công, hoặc `null` nếu phương thức không tồn tại / không gọi được.
- **Ví dụ**:
  ```javascript
  const math = { add: (a, b) => a + b };
  safeExecute(math, "add", 5, 10);      // => 15
  safeExecute(math, "divide", 10, 2);   // => null (không bị crash!)
  safeExecute(null, "add", 1, 2);       // => null
  ```
