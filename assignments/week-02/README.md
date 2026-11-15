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
Trong các ứng dụng Web API (Express/NestJS/Fastify), khi nhận dữ liệu từ client gửi lên hoặc tích hợp dữ liệu bản đồ, lập trình viên cần bóc tách dữ liệu nhanh gọn, loại bỏ các trường nhạy cảm độc hại và xử lý linh hoạt nhiều cấu trúc dữ liệu khác nhau.

1. `sanitizeUserPayload(payload)`:
   - Xây dựng hàm làm sạch dữ liệu đăng ký/cập nhật người dùng gửi lên API, vận dụng kết hợp **Object Destructuring**, **Default Parameters**, **Rest Operator** và **Nullish Coalescing**.
   - Tham số:
     - `payload` (object): Dữ liệu gửi từ client. Nếu `payload` là `null`, `undefined` hoặc không phải kiểu object (chuỗi, số, mảng), hàm lập tức trả về `null`.
   - Quy tắc chuẩn hóa:
     - `username`: Cắt khoảng trắng thừa ở hai đầu (`.trim()`). Nếu không có hoặc rỗng sau khi trim, gán mặc định là `"anonymous"`.
     - `email`: Chuyển toàn bộ thành chữ thường (`.toLowerCase().trim()`). Nếu không có hoặc không phải chuỗi, gán mặc định là chuỗi rỗng `""`.
     - `role`: Giữ nguyên giá trị nếu được truyền. Nếu `role` là nullish (`null` hoặc `undefined`), gán mặc định là `"member"`.
     - **Tách bỏ trường nhạy cảm**: Tuyệt đối loại bỏ các trường `password`, `salt`, `secretToken`, `isAdmin` (không bao giờ cho phép người dùng tự gán quyền admin hoặc lưu token nhạy cảm trong profile công khai).
     - Gom toàn bộ các thuộc tính còn lại vào object `extraInfo` bằng toán tử Rest (`...extraInfo`).
   - Trả về object mới gồm 4 thuộc tính: `{ username, email, role, extraInfo }`.
   - **Yêu cầu tính bất biến (Immutability)**: Bạn KHÔNG ĐƯỢC làm biến đổi (mutate) object `payload` ban đầu!
   - *Ví dụ:*
     ```javascript
     const rawInput = {
       username: '  nam_dev  ',
       email: 'NAM@GMAIL.COM',
       role: 'editor',
       password: 'my-secret-password',
       salt: 'random-salt-hex',
       secretToken: 'jwt-token',
       isAdmin: true,
       age: 24,
       city: 'Hà Nội'
     };
     sanitizeUserPayload(rawInput);
     // => {
     //   username: 'nam_dev',
     //   email: 'nam@gmail.com',
     //   role: 'editor',
     //   extraInfo: { age: 24, city: 'Hà Nội' }
     // }
     ```

2. `formatCoordinates(point)`:
   - Trong các hệ thống Backend lưu trữ vị trí địa lý (GIS/GeoJSON), tọa độ có thể được truyền dưới dạng mảng `[longitude, latitude, elevation]` hoặc object `{ x, y, z }`.
   - Hàm `formatCoordinates(point)` nhận vào dữ liệu tọa độ `point` và chuẩn hóa thành chuỗi hiển thị duy nhất:
     - Nếu `point` là **Mảng**: Dùng **Array Destructuring** để trích xuất `[lng = 0, lat = 0, elev = 0]`.
     - Nếu `point` là **Object**: Dùng **Object Destructuring** kết hợp đổi tên và gán mặc định: `{ x: lng = 0, y: lat = 0, z: elev = 0 }`.
     - Nếu `point` là `null`, `undefined` hoặc kiểu dữ liệu không hợp lệ khác: Mặc định `lng = 0, lat = 0, elev = 0`.
   - Trả về chuỗi định dạng: `Long: ${lng}, Lat: ${lat}, Elev: ${elev}`.
   - **Bẫy kiểm tra**: Giá trị `0` là một tọa độ hoàn toàn hợp lệ (kinh độ/vĩ độ 0 tại xích đạo)! Bạn KHÔNG được dùng toán tử `||` vì sẽ vô tình biến số `0` thành giá trị mặc định.
   - *Ví dụ:*
     ```javascript
     formatCoordinates([106.6297, 10.8231, 15]);
     // => "Long: 106.6297, Lat: 10.8231, Elev: 15"

     formatCoordinates({ x: 105.8342, y: 21.0278 });
     // => "Long: 105.8342, Lat: 21.0278, Elev: 0"

     formatCoordinates([0, 0, 0]);
     // => "Long: 0, Lat: 0, Elev: 0"
     ```

---

### 🔥 Bài 2: Safe Navigation & Phân Giải Cấu Hình Hệ Thống
Khi gọi API bên thứ ba (Cổng thanh toán, SMS OTP, Dịch vụ vi mô) hoặc đọc file cấu hình hệ thống nhiều tầng, dữ liệu trả về thường bị khuyết thiếu hoặc null. Nếu truy cập trực tiếp kiểu `res.data.user.profile` server sẽ lập tức bị crash văng lỗi `TypeError: Cannot read properties of undefined`.

1. `getNestedConfig(config, pathArray, defaultValue = null)`:
   - Xây dựng hàm truy xuất an toàn giá trị cấu hình lồng nhau sâu qua danh sách khóa, kết hợp **Optional Chaining (`?.`)** và **Nullish Coalescing (`??`)**.
   - Tham số:
     - `config`: Object cấu hình hoặc bất kỳ giá trị nào (có thể là `null`, `undefined`, mảng...).
     - `pathArray` (array): Mảng các khóa/chỉ số cần duyệt qua, ví dụ `['database', 'cluster', 0, 'host']`.
     - `defaultValue` (mặc định `null`): Giá trị fallback khi đường dẫn không tồn tại hoặc gặp nullish.
   - Quy tắc truy xuất:
     - Nếu `pathArray` rỗng hoặc không phải mảng: Trả về `config ?? defaultValue`.
     - Lần lượt duyệt an toàn qua từng key bằng Optional Chaining (`curr?.[key]`). Nếu tại bất kỳ mắt xích nào gặp `null` hoặc `undefined`, dừng lại và trả về `defaultValue`.
     - **Bẫy kiểm tra**: Nếu giá trị tại đích đến là `0`, `false`, `""` hay `NaN`, đây là các giá trị cấu hình hợp lệ và **BẮT BUỘC** phải được giữ nguyên vẹn (sử dụng toán tử `?? defaultValue`).
   - *Ví dụ:*
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

2. `extractServiceInfo(serviceResponse)`:
   - Trích xuất an toàn dữ liệu từ response của Microservice / Third-party API để đảm bảo luồng nghiệp vụ không bao giờ bị gián đoạn.
   - Tham số: `serviceResponse` (có thể là object response, `null`, `undefined`, chuỗi...).
   - Trích xuất an toàn bằng Optional Chaining và Destructuring:
     - `statusCode`: Lấy từ `serviceResponse?.status`, nếu không có hoặc nullish thì mặc định `500`.
     - `isSuccess`: Lấy từ `serviceResponse?.data?.success`, mặc định `false`.
     - `serviceName`: Lấy từ `serviceResponse?.meta?.service?.name`, mặc định `"unknown-service"`.
     - `items`: Lấy từ `serviceResponse?.data?.items`, nếu là mảng thì giữ nguyên, ngược lại mặc định mảng rỗng `[]`.
     - `firstItemName`: Lấy tên phần tử đầu tiên `serviceResponse?.data?.items?.[0]?.name`, nếu không có thì mặc định `null`.
     - `errorCode`: Lấy từ `serviceResponse?.error?.code`, mặc định `null`.
   - Trả về object chứa đầy đủ 6 thuộc tính: `{ statusCode, isSuccess, serviceName, items, firstItemName, errorCode }`.
   - **Bản chất kiểm tra**: Hàm tuyệt đối không được ném lỗi (crash) trong bất kỳ tình huống dữ liệu nào, kể cả khi `serviceResponse` truyền vào là `null` hoặc chuỗi rỗng.
   - *Ví dụ:*
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
     ```

---

### 🔥 Bài 3: Hợp Nhất Cấu Hình Đa Tầng & Event Dispatcher Gọn Nhẹ
Trong kiến trúc phần mềm Node.js, việc kế thừa/ghi đè cấu hình (Configuration Merging) và lắng nghe sự kiện (Event-driven) là hai mô hình xuất hiện ở hầu hết các framework như Express, Socket.IO hay NestJS.

1. `mergeServerOptions(defaultOptions = {}, customOptions = {})`:
   - Hợp nhất cấu hình mặc định của server với cấu hình tùy chỉnh của người dùng, hỗ trợ shallow merge 1 tầng đối tượng lồng nhau bằng **Spread Operator (`...`)**.
   - Tham số: `defaultOptions`, `customOptions` (object cấu hình). Nếu một trong hai là `null` hoặc `undefined`, tự động coi như `{}`.
   - Quy tắc hợp nhất:
     - Tạo một bản sao mới kế thừa toàn bộ thuộc tính từ `defaultOptions`.
     - Duyệt qua từng thuộc tính trong `customOptions`:
       - Nếu thuộc tính đó ở CẢ HAI bên đều là **Plain Object** (đối tượng thông thường, không phải `null` và không phải `Array`): Thực hiện gộp 1 tầng bằng Spread: `{ ...defaultOptions[key], ...customOptions[key] }` để giữ lại các thiết lập con mặc định chưa bị ghi đè!
       - Ngược lại: Ghi đè giá trị trực tiếp từ `customOptions[key]`.
     - Các thuộc tính mới chỉ xuất hiện trong `customOptions` cũng được thêm vào cấu hình kết quả.
   - **Yêu cầu tính bất biến (Immutability)**: Cả `defaultOptions` và `customOptions` gốc đều KHÔNG ĐƯỢC phép bị thay đổi thuộc tính!
   - *Ví dụ:*
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
     //   db: { host: 'remote-pg.internal', port: 5432, ssl: true }, // port: 5432 mặc định được giữ lại!
     //   routes: ['/api/v2']                                         // mảng ghi đè hoàn toàn
     // }
     ```

2. `createEventDispatcher()`:
   - Xây dựng một bộ phát sự kiện (Event Dispatcher / Event Emitter) mini linh hoạt, vận dụng **Rest Parameters** và **Spread Operator** để tiếp nhận và chuyển tiếp số lượng đối số không giới hạn.
   - Trả về một đối tượng quản lý sự kiện có 3 phương thức:
     - `on(eventName, handler)`: Đăng ký hàm `handler` cho sự kiện `eventName`. Nếu `handler` không phải là một `function`, bỏ qua không đăng ký. Cho phép đăng ký nhiều handler cho cùng một sự kiện. Phương thức này trả về chính đối tượng dispatcher (hỗ trợ **Method Chaining** dạng `.on(...).on(...)`).
     - `emit(eventName, ...args)`: Kích hoạt sự kiện `eventName`. Dùng Rest parameter `...args` để gom toàn bộ đối số và dùng Spread `handler(...args)` để truyền nguyên vẹn đối số vào từng handler đã đăng ký. Sử dụng Optional Chaining an toàn nếu sự kiện chưa có ai đăng ký (`handlers?.[eventName]`). Trả về tổng số handler đã được thực thi (number).
     - `getRegisteredEvents()`: Trả về một mảng chứa tên các sự kiện hiện đang có ít nhất 1 handler hợp lệ được đăng ký.
   - *Ví dụ:*
     ```javascript
     const dispatcher = createEventDispatcher();
     const logs = [];

     dispatcher
       .on('order_created', (id, total) => logs.push(`Đơn #${id}: ${total}đ`))
       .on('order_created', (id) => logs.push(`Notify warehouse for #${id}`));

     const count = dispatcher.emit('order_created', 'DH101', 500000);
     // count => 2 (2 handlers đã được chạy)
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
