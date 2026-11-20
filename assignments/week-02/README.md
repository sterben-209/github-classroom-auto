# 📌 BÀI KIỂM TRA TUẦN 02: DESTRUCTURING, REST/SPREAD, OPTIONAL CHAINING & NULLISH COALESCING
**Chủ đề:** Object & Array Destructuring, Rest Parameters & Spread Operator, Optional Chaining (`?.`), Nullish Coalescing (`??`)

> 💡 **Gợi ý cho học viên**: Nếu bạn muốn gõ code làm quen cú pháp trước, hãy hoàn thành 8 bài tập mini tại thư mục **[`exercises/week-02/`](../../exercises/week-02/README.md)** trước khi bước vào làm Bài kiểm tra chính thức này nhé!

---

## 📚 PHẦN 1: BÀI TẬP LÝ THUYẾT (20 CÂU TĂNG DẦN ĐỘ KHÓ)

👉 **Cách làm bài**: Đọc kỹ 20 câu hỏi dưới đây và điền đáp án bạn chọn (`"A"`, `"B"`, `"C"` hoặc `"D"`) vào file **`quiz.json`** ngay trong thư mục này.

---

### 🟢 MỨC ĐỘ 1: CƠ BẢN & NHẬN BIẾT (CÂU 1 - 7)

#### Câu 1: Trong JavaScript ES6, cú pháp nào sau đây dùng để trích xuất thuộc tính `name` và `age` từ đối tượng `user` bằng Object Destructuring?
- **A.** `const { name, age } = user;`
- **B.** `const [ name, age ] = user;`
- **C.** `const { name; age } = user;`
- **D.** `const user { name, age };`

#### Câu 2: Cho mảng `const colors = ['red', 'green', 'blue'];`. Cú pháp nào để lấy phần tử đầu tiên vào biến `first` và phần tử thứ hai vào biến `second` bằng Array Destructuring?
- **A.** `const { first, second } = colors;`
- **B.** `const [ first, second ] = colors;`
- **C.** `const ( first, second ) = colors;`
- **D.** `const [ first; second ] = colors;`

#### Câu 3: Trong Object Destructuring, nếu thuộc tính không tồn tại trên đối tượng và không có giá trị mặc định, biến nhận giá trị gì?
- **A.** `null`
- **B.** `undefined`
- **C.** `NaN`
- **D.** Báo lỗi `ReferenceError`

#### Câu 4: Để đổi tên thuộc tính `id` thành `userId` khi destructuring từ object `account`, cú pháp nào sau đây là ĐÚNG?
- **A.** `const { id as userId } = account;`
- **B.** `const { id: userId } = account;`
- **C.** `const { userId: id } = account;`
- **D.** `const { id -> userId } = account;`

#### Câu 5: Ký hiệu nào đại diện cho Rest Parameter và Spread Operator trong JavaScript ES6?
- **A.** `...` (3 dấu chấm liên tiếp)
- **B.** `..` (2 dấu chấm liên tiếp)
- **C.** `***` (3 dấu sao)
- **D.** `->`

#### Câu 6: Trong khai báo danh sách tham số của một hàm, vị trí hợp lệ của Rest Parameter là gì?
- **A.** Luôn luôn đứng ở vị trí đầu tiên
- **B.** Có thể đứng ở bất kỳ vị trí nào
- **C.** Bắt buộc phải là tham số cuối cùng trong danh sách
- **D.** Đứng ở vị trí kế cuối

#### Câu 7: Toán tử Optional Chaining (`?.`) giúp giải quyết vấn đề gì khi truy cập thuộc tính lồng nhau?
- **A.** Tự động gán giá trị mặc định cho thuộc tính
- **B.** Tránh phát sinh lỗi `TypeError` khi đối tượng cha là `null` hoặc `undefined`
- **C.** Tăng tốc độ đọc dữ liệu từ ổ cứng
- **D.** Tự động tạo thuộc tính mới nếu chưa tồn tại

---

### 🟡 MỨC ĐỘ 2: THÔNG HIỂU & VẬN DỤNG (CÂU 8 - 14)

#### Câu 8: Toán tử Nullish Coalescing (`a ?? b`) trả về `b` khi giá trị của `a` là gì?
- **A.** Mọi giá trị falsy (bao gồm `0`, `false`, `""`, `null`, `undefined`, `NaN`)
- **B.** Chỉ khi `a` là `null` hoặc `undefined`
- **C.** Chỉ duy nhất khi `a` là `undefined`
- **D.** Chỉ khi `a` là `0` hoặc `false`

#### Câu 9: Đoạn mã sau in ra giá trị gì?
```javascript
const obj1 = { x: 1, y: 2 };
const obj2 = { y: 20, z: 30 };
const merged = { ...obj1, ...obj2 };
console.log(merged.y);
```
- **A.** `2`
- **B.** `20`
- **C.** `[2, 20]`
- **D.** `undefined`

#### Câu 10: Điểm khác biệt CỐT LÕI giữa toán tử `||` và `??` là gì khi toán hạng bên trái là số `0` hoặc chuỗi rỗng `""`?
- **A.** `||` coi `0` và `""` là falsy nên sẽ lấy vế phải, còn `??` chỉ kiểm tra `null`/`undefined` nên vẫn giữ lại `0` và `""`
- **B.** `??` coi `0` và `""` là nullish nên lấy vế phải, còn `||` giữ nguyên vế trái
- **C.** Hai toán tử này hoạt động hoàn toàn giống nhau trong mọi trường hợp
- **D.** `??` báo lỗi cú pháp nếu toán hạng là số `0`

#### Câu 11: Cho đoạn mã sau:
```javascript
const { count = 10 } = { count: null };
console.log(count);
```
Kết quả in ra màn hình là gì?
- **A.** `10`
- **B.** `null`
- **C.** `undefined`
- **D.** Báo lỗi `TypeError`

#### Câu 12: Cho đoạn mã trích xuất cấu hình database sau:
```javascript
const config = {
  db: {
    host: "localhost"
  }
};
const { db: { host, port = 3306 } } = config;
console.log(host, port);
```
Kết quả in ra màn hình là gì?
- **A.** `localhost 3306`
- **B.** `localhost undefined`
- **C.** `undefined 3306`
- **D.** Báo lỗi `ReferenceError: port is not defined`

#### Câu 13: Khi destructuring mảng `const fruits = ['apple', 'banana', 'orange', 'mango'];`, làm thế nào để lấy phần tử đầu tiên và phần tử thứ ba, bỏ qua phần tử thứ hai?
- **A.** `const [first, third] = fruits;`
- **B.** `const [first, , third] = fruits;`
- **C.** `const [first, skip, third] = fruits;`
- **D.** `const [first; ; third] = fruits;`

#### Câu 14: Cho đoạn mã loại bỏ trường nhạy cảm trong Backend sau:
```javascript
const user = { id: 1, username: "dev", passwordHash: "secret123", email: "dev@test.com" };
const { passwordHash, ...publicUser } = user;
console.log(publicUser);
```
`publicUser` chứa những thuộc tính nào?
- **A.** `{ id: 1, username: "dev", passwordHash: "secret123", email: "dev@test.com" }`
- **B.** `{ passwordHash: "secret123" }`
- **C.** `{ id: 1, username: "dev", email: "dev@test.com" }`
- **D.** `undefined`

---

### 🔴 MỨC ĐỘ 3: NÂNG CAO, EDGE CASES & THỰC TẾ (CÂU 15 - 20)

#### Câu 15: Cho đoạn mã sao chép đối tượng lồng nhau sau:
```javascript
const original = { name: "A", settings: { theme: "light" } };
const clone = { ...original };
clone.settings.theme = "dark";
console.log(original.settings.theme);
```
Kết quả in ra là gì và tại sao?
- **A.** `"light"` vì toán tử spread tạo ra bản sao sâu (deep clone) hoàn toàn độc lập
- **B.** `"dark"` vì toán tử spread chỉ tạo bản sao nông (shallow copy), các đối tượng con bên trong vẫn dùng chung tham chiếu bộ nhớ
- **C.** `undefined`
- **D.** Báo lỗi `TypeError`

#### Câu 16: Cú pháp Optional Chaining khi gọi một phương thức có thể không tồn tại hoặc truy cập mảng có thể là nullish là gì?
- **A.** `obj?.method?() && arr?[0]`
- **B.** `obj.method?.() && arr?.[0]`
- **C.** `obj->method() && arr->[0]`
- **D.** `obj?(method) && arr?(0)`

#### Câu 17: Đoạn mã sau in ra gì?
```javascript
const user = {
  profile: null
};
console.log(user?.profile?.address?.city ?? "Chưa có địa chỉ");
```
- **A.** Báo lỗi `TypeError: Cannot read properties of null`
- **B.** `undefined`
- **C.** `"Chưa có địa chỉ"`
- **D.** `null`

#### Câu 18: Thao tác nào sau đây với toán tử Optional Chaining sẽ gây ra lỗi `SyntaxError` trong JavaScript?
- **A.** `const val = obj?.prop;`
- **B.** `delete obj?.prop;`
- **C.** `obj?.prop = 123;` (Optional Chaining ở vế trái phép gán)
- **D.** `const fn = obj?.method?.();`

#### Câu 19: Biểu thức nào sau đây sẽ bị JavaScript ném lỗi `SyntaxError` khi thực thi vì thiếu cặp dấu ngoặc đơn tường minh?
- **A.** `const x = a ?? b ?? c;`
- **B.** `const x = a || b || c;`
- **C.** `const x = a && b ?? c;`
- **D.** `const x = (a && b) ?? c;`

#### Câu 20: Cho đoạn mã sau về hàm khởi tạo kết nối Database:
```javascript
function createConnection({ host = "localhost", port = 5432 } = {}) {
  return `${host}:${port}`;
}
console.log(createConnection());
console.log(createConnection({ port: 3306 }));
```
Kết quả in ra lần lượt là gì?
- **A.** Báo lỗi `TypeError` ở dòng 1; `"localhost:3306"` ở dòng 2
- **B.** `"localhost:5432"` và `"localhost:3306"`
- **C.** `"undefined:undefined"` và `"undefined:3306"`
- **D.** `"{}:5432"` và `"{}:3306"`

---

## 💻 PHẦN 2: BÀI TẬP THỰC HÀNH CỐT LÕI (ỨNG DỤNG BACKEND NODE.JS)

Mở file **`index.js`** trong thư mục này và hoàn thành 3 bài toán thiết thực, bám sát các tính năng ES6+ cốt lõi được sử dụng hàng ngày trong Backend Node.js (Destructuring, Rest & Spread Operator, Optional Chaining `?.`, Nullish Coalescing `??`):

---

### 🔥 Bài 1: Chuẩn Hóa Payload API & Xử Lý Tọa Độ GIS
Trong các ứng dụng Web API (Express/NestJS/Fastify), khi nhận dữ liệu từ client gửi lên hoặc tích hợp dữ liệu bản đồ, lập trình viên cần bóc tách dữ liệu an toàn, loại bỏ các trường nhạy cảm và chuẩn hóa các cấu trúc dữ liệu khác nhau.

#### 1. `sanitizeUserPayload(payload)`
- 🎯 **Mục tiêu**: Làm sạch dữ liệu người dùng gửi lên API, bảo vệ hệ thống trước nguy cơ tự gán quyền hạn hoặc lưu trữ dữ liệu nhạy cảm công khai.
- 📥 **Input**:
  - `payload` (`any`): Dữ liệu gửi từ client.
  - *Xử lý an toàn*: Nếu `payload` không phải là một Plain Object hợp lệ (là `null`, `undefined`, chuỗi, số, mảng), hàm lập tức trả về `null`.
- ⚙️ **Yêu cầu xử lý (Logic)**:
  - `username`: Cắt khoảng trắng thừa ở hai đầu. Nếu sau khi cắt bị rỗng hoặc không có thuộc tính này, gán mặc định là `"anonymous"`.
  - `email`: Chuyển toàn bộ thành chữ thường và cắt khoảng trắng thừa. Nếu không phải kiểu chuỗi hoặc không có, gán mặc định là chuỗi rỗng `""`.
  - `role`: Giữ nguyên giá trị được truyền. Nếu giá trị này là nullish (`null` hoặc `undefined`), gán mặc định là `"member"`.
  - **Tách bỏ trường nhạy cảm**: Loại bỏ hoàn toàn các trường `password`, `salt`, `secretToken`, `isAdmin` (không bao giờ cho phép lưu token hay tự phong quyền admin).
  - **Gom thông tin phụ**: Toàn bộ các thuộc tính còn lại (ngoài 3 trường chuẩn hóa và 4 trường nhạy cảm bị loại bỏ) được gom vào một đối tượng con có tên là `extraInfo`.
  - **Yêu cầu tính bất biến (Immutability)**: Tuyệt đối KHÔNG ĐƯỢC làm biến đổi (mutate) đối tượng `payload` ban đầu.
- 📤 **Output**:
  - Trả về đối tượng mới gồm đúng 4 thuộc tính: `{ username, email, role, extraInfo }` (hoặc `null` nếu input không hợp lệ).
- 💡 **Ví dụ minh họa**:
  ```javascript
  const rawInput = {
    username: '  alex_dev  ',
    email: 'ALEX@DOMAIN.COM',
    role: 'editor',
    password: 'super-secret-password',
    salt: 'random-salt-hex',
    secretToken: 'jwt-refresh-token',
    isAdmin: true,
    age: 28,
    department: 'Engineering'
  };
  sanitizeUserPayload(rawInput);
  // => {
  //   username: 'alex_dev',
  //   email: 'alex@domain.com',
  //   role: 'editor',
  //   extraInfo: { age: 28, department: 'Engineering' }
  // }

  sanitizeUserPayload({ role: null });
  // => { username: 'anonymous', email: '', role: 'member', extraInfo: {} }

  sanitizeUserPayload(null);
  // => null
  ```

#### 2. `formatCoordinates(point)`
- 🎯 **Mục tiêu**: Chuẩn hóa dữ liệu tọa độ địa lý (GIS/GeoJSON) từ nhiều nguồn dữ liệu khác nhau thành chuỗi hiển thị duy nhất.
- 📥 **Input**:
  - `point` (`Array|object|any`): Dữ liệu tọa độ, có thể nhận vào dưới một trong các dạng:
    - **Dạng Mảng**: `[kinhĐộ, vĩĐộ, caoĐộ]`
    - **Dạng Object**: `{ x, y, z }` trong đó `x` là kinh độ, `y` là vĩ độ, `z` là cao độ.
    - **Dạng không hợp lệ**: `null`, `undefined`, chuỗi, số...
- ⚙️ **Yêu cầu xử lý (Logic)**:
  - Trích xuất 3 thành phần: Kinh độ (`lng`), Vĩ độ (`lat`), Cao độ (`elev`).
  - Nếu bất kỳ thành phần nào bị khuyết thiếu, không phải kiểu số hoặc input không hợp lệ: thành phần đó nhận giá trị mặc định là `0`.
  - **Lưu ý nghiệp vụ**: Giá trị `0` là một tọa độ hoàn toàn hợp lệ (vị trí kinh độ/vĩ độ 0 trên xích đạo). Phải bảo toàn chính xác giá trị `0`, không để bị nhầm lẫn thành giá trị khuyết thiếu.
- 📤 **Output**:
  - Chuỗi định dạng (`string`): `Long: ${lng}, Lat: ${lat}, Elev: ${elev}`
- 💡 **Ví dụ minh họa**:
  ```javascript
  formatCoordinates([106.6297, 10.8231, 15]);
  // => "Long: 106.6297, Lat: 10.8231, Elev: 15"

  formatCoordinates({ x: 105.8342, y: 21.0278 });
  // => "Long: 105.8342, Lat: 21.0278, Elev: 0"

  formatCoordinates([0, 0, 0]);
  // => "Long: 0, Lat: 0, Elev: 0"

  formatCoordinates(null);
  // => "Long: 0, Lat: 0, Elev: 0"
  ```

---

### 🔥 Bài 2: Safe Navigation & Phân Giải Cấu Hình Hệ Thống
Khi gọi API bên thứ ba (Cổng thanh toán, SMS OTP, Dịch vụ vi mô) hoặc đọc file cấu hình hệ thống nhiều tầng, dữ liệu trả về thường bị khuyết thiếu hoặc null. Nếu truy cập trực tiếp thì server sẽ lập tức bị crash văng lỗi `TypeError: Cannot read properties of undefined`.

#### 1. `getNestedConfig(config, pathArray, defaultValue = null)`
- 🎯 **Mục tiêu**: Truy xuất an toàn giá trị cấu hình lồng nhau sâu qua danh sách khóa, ngăn ngừa lỗi crash server khi đối tượng cha bị thiếu hoặc null.
- 📥 **Input**:
  - `config` (`any`): Cây đối tượng cấu hình hoặc bất kỳ giá trị nào (có thể là `null`, `undefined`, mảng...).
  - `pathArray` (`Array<string|number>`): Mảng danh sách các khóa / chỉ số cần duyệt qua theo thứ tự từ ngoài vào trong.
  - `defaultValue` (`any`, mặc định `null`): Giá trị dự phòng trả về khi đường dẫn không tồn tại hoặc gặp giá trị nullish trên đường duyệt.
- ⚙️ **Yêu cầu xử lý (Logic)**:
  - Nếu `pathArray` không phải là mảng hoặc là mảng rỗng: trả về chính `config` (nếu `config` là nullish thì trả về `defaultValue`).
  - Lần lượt truy cập an toàn từng tầng theo thứ tự trong `pathArray`. Nếu tại bất kỳ mắt xích nào gặp `null` hoặc `undefined`, dừng quá trình duyệt và trả về `defaultValue`.
  - **Lưu ý nghiệp vụ**: Nếu giá trị tại đích đến là `0`, `false`, `""` hay `NaN`, đây là các thiết lập cấu hình hợp lệ (ví dụ: `timeout = 0`, `ssl = false`) và BẮT BUỘC phải được giữ nguyên vẹn, không được thay thế bằng `defaultValue`.
- 📤 **Output**:
  - Giá trị cấu hình tìm được tại đích đến, hoặc `defaultValue` nếu đường dẫn không hợp lệ.
- 💡 **Ví dụ minh họa**:
  ```javascript
  const config = {
    server: {
      port: 8080,
      timeout: 0,
      ssl: false
    }
  };
  getNestedConfig(config, ['server', 'port']);           // => 8080
  getNestedConfig(config, ['server', 'ssl'], true);      // => false (không bị biến thành true!)
  getNestedConfig(config, ['server', 'timeout'], 5000);  // => 0 (không bị biến thành 5000!)
  getNestedConfig(config, ['db', 'host'], 'localhost');  // => "localhost"
  ```

#### 2. `extractServiceInfo(serviceResponse)`
- 🎯 **Mục tiêu**: Bóc tách dữ liệu phản hồi từ Microservice hoặc API bên thứ ba, chuẩn hóa dữ liệu thành format an toàn cho luồng xử lý nội bộ.
- 📥 **Input**:
  - `serviceResponse` (`any`): Dữ liệu phản hồi từ dịch vụ bên ngoài, có thể là object, `null`, `undefined`, chuỗi lỗi...
- ⚙️ **Yêu cầu xử lý (Logic)**:
  - Trích xuất an toàn 6 trường thông tin, đảm bảo không bao giờ ném lỗi runtime trong mọi tình huống dữ liệu:
    - `statusCode`: Lấy từ mã trạng thái HTTP (`status`). Nếu không có hoặc nullish, mặc định là `500`.
    - `isSuccess`: Lấy từ cờ thành công (`data.success`). Mặc định là `false`.
    - `serviceName`: Lấy từ thông tin định danh dịch vụ (`meta.service.name`). Mặc định là `"unknown-service"`.
    - `items`: Lấy từ danh sách dữ liệu (`data.items`). Nếu là mảng thì giữ nguyên, ngược lại mặc định là mảng rỗng `[]`.
    - `firstItemName`: Lấy tên của phần tử đầu tiên trong danh sách (`data.items[0].name`). Nếu không có phần tử hoặc không có thuộc tính name, mặc định là `null`.
    - `errorCode`: Lấy từ mã lỗi chi tiết (`error.code`). Mặc định là `null`.
- 📤 **Output**:
  - Đối tượng mới chứa đúng 6 thuộc tính: `{ statusCode, isSuccess, serviceName, items, firstItemName, errorCode }`.
- 💡 **Ví dụ minh họa**:
  ```javascript
  const res = {
    status: 200,
    data: {
      success: true,
      items: [{ name: 'Bàn phím cơ' }, { name: 'Chuột Gaming' }]
    },
    meta: { service: { name: 'inventory-service' } }
  };
  extractServiceInfo(res);
  // => {
  //   statusCode: 200,
  //   isSuccess: true,
  //   serviceName: 'inventory-service',
  //   items: [{ name: 'Bàn phím cơ' }, { name: 'Chuột Gaming' }],
  //   firstItemName: 'Bàn phím cơ',
  //   errorCode: null
  // }

  extractServiceInfo(null);
  // => {
  //   statusCode: 500,
  //   isSuccess: false,
  //   serviceName: 'unknown-service',
  //   items: [],
  //   firstItemName: null,
  //   errorCode: null
  // }
  ```

---

### 🔥 Bài 3: Hợp Nhất Cấu Hình Đa Tầng & Event Dispatcher Gọn Nhẹ
Trong kiến trúc phần mềm Node.js, việc kế thừa/ghi đè cấu hình và lắng nghe sự kiện (Event-driven) là hai mô hình xuất hiện ở hầu hết các framework như Express, Socket.IO hay NestJS.

#### 1. `mergeServerOptions(defaultOptions, customOptions)`
- 🎯 **Mục tiêu**: Hợp nhất cấu hình mặc định của hệ thống với các thiết lập tùy biến của người dùng, hỗ trợ kế thừa cấu hình con lồng nhau 1 tầng.
- 📥 **Input**:
  - `defaultOptions` (`object|null|undefined`): Cấu hình mặc định ban đầu.
  - `customOptions` (`object|null|undefined`): Cấu hình tùy chỉnh của người dùng cần áp dụng.
  - Nếu một trong hai tham số bị truyền `null` hoặc `undefined`, tự động coi như đối tượng rỗng `{}`.
- ⚙️ **Yêu cầu xử lý (Logic)**:
  - Tạo cấu hình kết quả kế thừa toàn bộ thuộc tính từ `defaultOptions`.
  - Duyệt qua từng thuộc tính trong `customOptions`:
    - Nếu một thuộc tính ở CẢ HAI bên đều là **Plain Object** (đối tượng thông thường, không phải `null` và không phải `Array`): Thực hiện gộp 1 tầng đối tượng con để giữ lại các thiết lập con mặc định chưa bị người dùng ghi đè.
    - Ngược lại (kiểu nguyên thủy, mảng, hoặc một bên không phải plain object): Ghi đè trực tiếp giá trị từ `customOptions`.
  - Các thuộc tính mới chỉ xuất hiện trong `customOptions` cũng được bổ sung vào kết quả.
  - **Yêu cầu tính bất biến (Immutability)**: Tuyệt đối KHÔNG được làm thay đổi thuộc tính của 2 đối tượng gốc `defaultOptions` và `customOptions`.
- 📤 **Output**:
  - Đối tượng cấu hình mới đã được hợp nhất.
- 💡 **Ví dụ minh họa**:
  ```javascript
  const defaultOptions = {
    port: 3000,
    host: '0.0.0.0',
    db: { host: 'localhost', port: 5432, ssl: false },
    routes: ['/api/v1']
  };
  const customOptions = {
    port: 8080,
    db: { host: 'remote-pg.internal', ssl: true },
    routes: ['/api/v2']
  };
  mergeServerOptions(defaultOptions, customOptions);
  // => {
  //   port: 8080,
  //   host: '0.0.0.0',
  //   db: { host: 'remote-pg.internal', port: 5432, ssl: true }, // port 5432 mặc định được bảo toàn!
  //   routes: ['/api/v2']                                         // mảng ghi đè hoàn toàn
  // }
  ```

#### 2. `createEventDispatcher()`
- 🎯 **Mục tiêu**: Xây dựng một bộ phát sự kiện (Event Dispatcher / Event Emitter) mini linh hoạt, có khả năng tiếp nhận và chuyển tiếp số lượng đối số tùy ý cho các hàm lắng nghe.
- 📥 **Input**:
  - Không nhận tham số khởi tạo.
- ⚙️ **Yêu cầu xử lý (Logic)**:
  - Khởi tạo và trả về một đối tượng quản lý sự kiện cung cấp 3 phương thức:
    1. `on(eventName, handler)`:
       - Đăng ký hàm `handler` lắng nghe sự kiện `eventName`.
       - Nếu `handler` không phải kiểu hàm (`function`), bỏ qua không đăng ký.
       - Cho phép đăng ký nhiều handler cho cùng một sự kiện.
       - Phương thức này trả về chính đối tượng dispatcher để hỗ trợ gọi chuỗi phương thức (Method Chaining dạng `.on(...).on(...)`).
    2. `emit(eventName, ...args)`:
       - Kích hoạt sự kiện `eventName`, chuyển tiếp nguyên vẹn toàn bộ các đối số trong `...args` vào từng hàm handler đã đăng ký của sự kiện đó.
       - Xử lý an toàn nếu sự kiện chưa có bất kỳ handler nào đăng ký.
       - Trả về tổng số handler đã được thực thi thành công (kiểu `number`).
    3. `getRegisteredEvents()`:
       - Trả về một mảng chứa danh sách tên các sự kiện hiện đang có ít nhất 1 handler hợp lệ được đăng ký.
- 📤 **Output**:
  - Đối tượng dispatcher có 3 phương thức `{ on, emit, getRegisteredEvents }`.
- 💡 **Ví dụ minh họa**:
  ```javascript
  const dispatcher = createEventDispatcher();
  const logs = [];

  dispatcher
    .on('order_created', (id, total) => logs.push(`Đơn #${id}: ${total}đ`))
    .on('order_created', (id) => logs.push(`Notify warehouse for #${id}`));

  const count = dispatcher.emit('order_created', 'DH101', 500000);
  // count => 2
  // logs => ["Đơn #DH101: 500000đ", "Notify warehouse for #DH101"]

  dispatcher.getRegisteredEvents();
  // => ["order_created"]
  ```

---

👉 **Kiểm tra bài làm tại máy trước khi nộp**:
```bash
# Test riêng bài tập tuần 2:
npm run w2
# Hoặc:
node --test assignments/week-02/sample.test.js
```

👉 **Nộp bài tự động**:
```bash
npm run submit
# Hoặc: node scripts/submit.js
```
