# 📘 QUY CHUẨN & HƯỚNG DẪN TẠO ĐỀ BÀI KIỂM TRA MỚI (TUẦN MỚI)

Tài liệu này là **kim chỉ nam chuẩn hóa** dành cho Giảng viên / Admin hoặc AI Agent mỗi khi cần khởi tạo hoặc nâng cấp bài tập cho một tuần mới (`week-XX`) trong hệ thống bài tập Backend Node.js.

---

## 📂 1. Phân Định Giữa "Bài Tập Luyện Tập" và "Bài Kiểm Tra"

Hệ thống được thiết kế phân định rạch ròi 2 phần:

```text
github-classroom-auto/
├── exercises/                            # 🏋️ BÀI TẬP LUYỆN TẬP (Làm quen cú pháp, viết nhiều cho quen tay)
│   └── week-XX/
│       ├── README.md                     # Đề bài tập mini (6 - 8 dạng cú pháp ngắn gọn, dễ hiểu)
│       ├── index.js                      # File code luyện tập (mỗi hàm chỉ 1 - 3 dòng code)
│       └── sample.test.js                # Bộ test mẫu học viên tự chạy: npm run exXX
│
├── assignments/                          # 📝 BÀI KIỂM TRA CHÍNH THỨC (Đánh giá & Chấm điểm Google Sheet)
│   └── week-XX/
│       ├── README.md                     # Đề bài kiểm tra (Lý thuyết 20 câu + Thực hành 3 bài tổng hợp)
│       ├── quiz.json                     # File JSON học viên điền đáp án trắc nghiệm (cau_1 đến cau_20)
│       ├── index.js                      # Template code bài kiểm tra thực hành backend
│       └── sample.test.js                # Bộ test mẫu học viên tự chạy kiểm tra: npm run wXX
│
├── .hidden_tests/
│   └── week-XX/                          # 🔴 THƯ MỤC TEST ẨN (Nằm trong .gitignore)
│       └── eval.test.js                  # Bộ test đánh giá chuyên sâu (chống gian lận trên GitHub Actions)
│
└── .github/
    └── keys/                             # 🔑 THƯ MỤC ĐÁP ÁN (Nằm trong .gitignore)
        └── week-XX.json                  # Đáp án chuẩn 20 câu trắc nghiệm (phục vụ test local/fallback)
```

> **Nguyên tắc phân định**:
> - **Bài tập luyện tập (`exercises/`)**: Tập trung vào sự **vừa sức**, ngắn gọn, chia nhỏ thành **nhiều dạng phong phú (6 – 8 hàm mini)** để học viên mở rộng tầm mắt và gõ code nhiều lần cho quen tay. Không chấm điểm tự động lên Sheet, học viên tự luyện trước.
> - **Bài kiểm tra (`assignments/`)**: Là bài đánh giá năng lực chính thức, gồm **20 câu lý thuyết phân cấp độ** (hoặc 20 - 30 câu tùy khối lượng kiến thức tuần) và **3 bài toán thực hành tổng hợp Backend** để GitHub Actions chấm điểm và ghi vào Google Sheet.

---

## 📚 2. Tiêu Chuẩn Phần 1: Lý Thuyết (20 Câu Trắc Nghiệm Chuẩn)

### 2.1. Phân bổ cấp độ (Progressive Difficulty)
Mỗi tuần gồm **20 câu hỏi** (hoặc 20 - 30 câu), chia đều theo 3 cấp độ:
- 🟢 **Mức độ 1: Cơ bản & Nhận biết (Câu 1 - 7)**:
  - Khái niệm, cú pháp cơ bản, từ khóa, hành vi mặc định.
- 🟡 **Mức độ 2: Thông hiểu & Vận dụng (Câu 8 - 14)**:
  - Đoạn mã ngắn (code snippet), so sánh cơ chế (VD: `||` vs `??`, `var` vs `let`), phân tích kết quả log, bẫy cơ bản.
- 🔴 **Mức độ 3: Nâng cao, Edge Cases & Thực tế (Câu 15 - 20)**:
  - Lỗi cú pháp (`SyntaxError`), short-circuiting, bẫy tham chiếu (Shallow vs Deep), tính bất biến (Immutability), prototype/getter, ứng dụng backend thực tế.

### 2.2. Định dạng câu hỏi chuẩn
- Mỗi câu gồm 4 đáp án: `- **A.**`, `- **B.**`, `- **C.**`, `- **D.**`.
- Đáp án đúng phải rõ ràng, giải thích ngắn gọn nguyên nhân trong ngoặc đơn nếu câu hỏi liên quan đến code output.
- Trong file `assignments/week-XX/quiz.json`:
  ```json
  {
    "cau_1": "",
    "cau_2": "",
    ...
    "cau_20": ""
  }
  ```
- File đáp án `.github/keys/week-XX.json` chứa đáp án tương ứng `"A"`, `"B"`, `"C"`, `"D"`.

---

## 💻 3. Tiêu Chuẩn Phần 2: Thực Hành (Ứng Dụng Backend Node.js)

### 3.1. Triết lý thiết kế bài toán (Dễ hiểu & Nhiều dạng thực tế)
- **Triết lý cốt lõi**: Bài tập được thiết kế **vừa sức, ngắn gọn (mỗi hàm chỉ 1 - 3 dòng code)**, chia nhỏ thành **nhiều dạng thực chiến (6 - 8 hàm mini)** thay vì ít bài nhưng dài dòng hay đánh đố thuật toán phức tạp.
- **Mục tiêu sư phạm**:
  - Giúp người học **mở rộng tầm mắt**: Thấy được nhiều khía cạnh ứng dụng thực tế khác nhau của cú pháp (từ xử lý tham số hàm, trích xuất dữ liệu, cấu hình cài đặt, lọc dữ liệu nhạy cảm đến gọi hàm an toàn).
  - Giúp người học **viết nhiều cho quen tay**: Việc gõ lặp đi lặp lại nhiều biến thể cú pháp giúp hình thành phản xạ tự nhiên khi code Backend.
- Mỗi bài toán gắn liền với các tình huống đời thực (xử lý options cấu hình, lọc password, format hiển thị, merge dữ liệu, callback an toàn...).

### 3.2. Văn phong và cấu trúc mô tả từng hàm trong `README.md`
Mỗi hàm bắt buộc phải trình bày theo chuẩn format:
1. **Tiêu đề bài & Bối cảnh kỹ thuật**: Giải thích ngắn gọn vì sao lập trình viên backend cần xử lý bài toán này.
2. **Tên hàm và tham số**: `tênHàm(param1, param2 = defaultValue)`
3. **Mô tả chi tiết**:
   - `Tham số`: Kiểu dữ liệu, ý nghĩa, xử lý khi truyền thiếu / `null` / `undefined`.
   - `Quy tắc xử lý / Quy tắc chuẩn hóa`: Liệt kê rõ các bước logic xử lý.
   - `Giá trị trả về`: Kiểu dữ liệu hoặc cấu trúc object trả về.
   - **Bẫy kiểm tra / Bản chất kiểm tra / Yêu cầu tính bất biến (Immutability)**: In đậm những lưu ý trọng tâm (ví dụ: không được mutate tham số gốc, phân biệt falsy và nullish).
   - `*Ví dụ:*` Khối code minh họa input truyền vào và output kết quả với comment `// => ...`.

---

## 🧪 4. Quy Chuẩn Xây Dựng File Code & Test

### 4.1. File template `assignments/week-XX/index.js`
- Comment header đồng bộ tiêu chuẩn.
- Phân vùng bằng comment: `// ==========================================`.
- Viết **JSDoc đầy đủ** cho từng hàm (`@param`, `@returns`).
- Thân hàm mặc định ném lỗi:
  ```javascript
  function tenHam(...) {
    // TODO: Học viên cài đặt hàm tại đây
    throw new Error("Chưa cài đặt hàm tenHam");
  }
  ```
- Cuối file export đầy đủ các hàm: `module.exports = { ... };`.

### 4.2. File test mẫu học viên `assignments/week-XX/sample.test.js`
- Dùng thư viện built-in Node.js: `const test = require('node:test');` và `const assert = require('node:assert');`.
- Viết test case rõ ràng, dễ hiểu cho từng hàm, kiểm tra các trường hợp tiêu biểu để học viên yên tâm trước khi nộp bài.

### 4.3. File test ẩn chấm điểm `.hidden_tests/week-XX/eval.test.js`
- Bắt buộc kiểm tra các tiêu chí sau:
  1. **Chống Hardcode**: Sử dụng vòng lặp sinh dữ liệu ngẫu nhiên (`Math.random()`).
  2. **Bảo vệ Immutability**: Dùng `Object.freeze()` trên input hoặc `assert` kiểm tra input ban đầu không bị đột biến thuộc tính.
  3. **Bẫy Falsy vs Nullish**: Test nghiêm ngặt các giá trị biên: `0`, `false`, `""`, `NaN`, `null`, `undefined`.
  4. **Edge Cases**: Dữ liệu dị biệt (mảng rỗng, chuỗi khoảng trắng, truyền thiếu đối số).

---

## ⚙️ 5. Cấu Hình Hệ Thống Chấm & Script

### 5.1. Thêm lệnh test vào `package.json`
Thêm script viết tắt cho tuần mới:
```json
"scripts": {
  "wXX": "node --test assignments/week-XX"
}
```

### 5.2. Cập nhật GitHub Secret `ANSWER_KEYS`
Bổ sung key cho tuần mới vào object JSON trên GitHub Secret `ANSWER_KEYS`:
```json
{
  "week-01": { ... },
  "week-02": { ... },
  "week-XX": {
    "cau_1": "A",
    ...
    "cau_20": "B"
  }
}
```

### 5.3. Đóng gói GitHub Secret `HIDDEN_TESTS_B64`
Sau khi tạo file `.hidden_tests/week-XX/eval.test.js`, chạy lệnh sau để lấy chuỗi Base64 cập nhật vào GitHub Secret `HIDDEN_TESTS_B64`:
```bash
tar -czf - -C .hidden_tests $(ls .hidden_tests) | base64 -w 0
```

---

## ✅ 6. Checklist Kiểm Thử 5 Bước Trước Khi Phát Hành

Trước khi bàn giao đề cho học viên, AI / Admin **BẮT BUỘC** thực hiện quy trình kiểm tra sau:

- [ ] **Bước 1**: Viết code giải mẫu (solution) tạm thời và chạy test mẫu:
  ```bash
  node --test assignments/week-XX
  ```
  *(Kết quả: Toàn bộ test mẫu phải PASS 100%)*

- [ ] **Bước 2**: Chạy kiểm tra bộ test ẩn:
  ```bash
  node --test .hidden_tests/week-XX/eval.test.js
  ```
  *(Kết quả: Toàn bộ hidden test phải PASS 100%)*

- [ ] **Bước 3**: Khôi phục lại template `index.js` (ném `throw new Error`), sau đó chạy lại test:
  ```bash
  node --test assignments/week-XX
  ```
  *(Kết quả: Phải FAIL 100% các hàm để chờ học viên code)*

- [ ] **Bước 4**: Kiểm tra logic chấm điểm tự động:
  ```bash
  python3 -c "
  import sys; sys.path.append('.github/scripts')
  from update_sheet import grade_theory, grade_practice
  print(grade_theory('assignments/week-XX', 'week-XX'))
  print(grade_practice('week-XX'))
  "
  ```
  *(Kết quả: Lý thuyết trả về 0đ khi quiz rỗng, thực hành trả về 0đ khi chưa làm)*

- [ ] **Bước 5**: Kiểm tra bảo mật git:
  Chạy `git status` đảm bảo `.hidden_tests/` và `.github/keys/` **KHÔNG** bị theo dõi (untracked) bởi git để tránh lộ đáp án.
