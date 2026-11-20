# 🚀 Lộ Trình Backend Node.js - Hệ Thống Chấm Bài Tự Động

Chào mừng các bạn đến với kho lưu trữ bài tập thực hành theo lộ trình Backend Node.js! Hệ thống được tích hợp **chấm điểm tự động và cập nhật trực tiếp lên Google Sheet theo từng tuần**.

---

## 📂 Cấu trúc thư mục bài tập (Tinh gọn & Dễ dùng)

Mỗi tuần được tổ chức rõ ràng gồm 2 phần: **Bài tập tự luyện** (làm quen) và **Bài kiểm tra chính thức** (chấm điểm):

```text
exercises/                 # 🏋️ Thư mục BÀI TẬP TỰ LUYỆN (Không chấm điểm - làm quen cú pháp)
└── week-02/
    ├── README.md          # 📖 Đề bài & đặc tả chi tiết (Mục tiêu, Input, Logic, Output, Ví dụ)
    ├── index.js           # 💻 File viết code tự luyện
    └── sample.test.js     # 🧪 File test chạy thử trên máy (npm run ex2)

assignments/               # 🎯 Thư mục BÀI KIỂM TRA CHÍNH THỨC (Chấm điểm tự động lên Google Sheet)
├── week-01/
│   ├── README.md          # 📖 Đề bài (Lý thuyết trắc nghiệm + Thực hành)
│   ├── quiz.json          # ✍️ File điền đáp án trắc nghiệm lý thuyết (A, B, C, D)
│   ├── index.js           # 💻 File viết code bài làm
│   └── sample.test.js     # 🧪 File test mẫu chạy thử trên máy (npm run w1)
│
├── week-02/
│   ├── README.md
│   ├── quiz.json
│   ├── index.js
│   └── sample.test.js
│
└── ... (các tuần tiếp theo)
```

---

## 📌 Hướng dẫn làm bài (Dành cho học viên)

### Bước 1: Fork & Clone repository
1. Bấm nút **Fork** ở góc trên bên phải để tạo bản sao về GitHub cá nhân của bạn.
2. Clone về máy:
   ```bash
   git clone https://github.com/your-username/github-classroom-auto.git
   cd github-classroom-auto
   ```

### Bước 2: Quy trình làm bài khuyến nghị

Để đạt kết quả tốt nhất và nắm vững kiến thức mà không bị áp lực, bạn nên đi theo quy trình 2 bước:

1. **Giai đoạn 1 - Luyện tập làm quen (`exercises/`):**
   - Vào thư mục `exercises/week-XX/`, đọc đề trong `README.md` và viết code vào `index.js`.
   - Chạy test kiểm tra: `npm run ex2` (cho tuần 2). Thư mục này không tính điểm, giúp bạn làm quen cú pháp và tư duy trước khi vào bài thật.

2. **Giai đoạn 2 - Làm bài kiểm tra chính thức (`assignments/`):**
   - Vào thư mục `assignments/week-XX/`.
   - **Lý thuyết**: Đọc các câu hỏi trắc nghiệm trong `README.md`, mở file **`quiz.json`** và điền đáp án `"A"`, `"B"`, `"C"` hoặc `"D"`.
   - **Thực hành**: Mở file **`index.js`** và hoàn thành các hàm theo yêu cầu.

### Bước 3: Chạy thử bài test trên máy
Gõ lệnh tắt để kiểm tra bài làm trước khi nộp:
```bash
# 1. Chạy test bài tự luyện:
npm run ex2

# 2. Chạy test bài kiểm tra tuần:
npm run w1        # Kiểm tra tuần 1
npm run w2        # Kiểm tra tuần 2

# 3. Chạy toàn bộ test dự án:
npm test
```

### Bước 4: Nộp bài tự động (Chỉ 1 lệnh duy nhất)
Sau khi làm bài xong, bạn chỉ cần gõ lệnh nộp bài:
```bash
# Nộp tự động (hệ thống tự nhận diện tuần theo branch hoặc file bạn đang sửa):
npm run submit

# Hoặc chỉ định rõ tuần muốn nộp:
npm run submit:w1   # Nộp tuần 1
npm run submit:w2   # Nộp tuần 2
```

🤖 **Script sẽ tự động thực hiện từ A - Z**:
1. Tự động chạy test thực hành tại máy và cảnh báo nếu còn bài bị fail.
2. Kiểm tra xem bạn đã điền đủ câu trắc nghiệm `quiz.json` chưa.
3. Tự động `git add`, `git commit` và `git push` lên GitHub.
4. Cung cấp đường link trực tiếp để xem điểm số trên Google Sheet!

### 🎉 Kết quả:
- Bot GitHub Actions sẽ tự động chấm cả **Lý thuyết** lẫn **Thực hành**.
- Điểm số tự động nhảy vào đúng dòng của Tuần đó và cột của Bạn trên [Bảng Điểm Google Sheet](https://docs.google.com/spreadsheets/d/1-oSqRicyEM3NKcq5mvrwalWFJukSv_F0BxTx5wBqG5c/edit?gid=2081490865#gid=2081490865).
- Bot sẽ để lại bình luận chi tiết điểm số ngay dưới Pull Request của bạn!
