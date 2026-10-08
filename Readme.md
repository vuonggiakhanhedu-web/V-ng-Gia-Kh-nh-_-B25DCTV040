## So sánh cách triển khai Phần A và Phần B

| Tiêu chí | Phần A (Vanilla JS) | Phần B (React) |
| :--- | :--- | :--- |
| **Công nghệ nền tảng** | HTML, CSS, JavaScript thuần. | Thư viện React (khởi tạo bằng Vite), cú pháp JSX. |
| **Kiến trúc & Cấu trúc** | Thao tác DOM thủ công (`document.createElement`, `appendChild`). Code thường bị gộp chung và khó mở rộng. | Kiến trúc Component (`Header`, `BookCard`, `BookList`...). Code được chia nhỏ, gọn gàng và rất dễ tái sử dụng. |
| **Nguồn dữ liệu** | Gọi dữ liệu động từ API (MockAPI) thông qua `fetch` / `async-await`. | Sử dụng mảng dữ liệu tĩnh cục bộ (được import từ file `books.js`). |
| **Cập nhật Giao diện (UI)** | Imperative (Mệnh lệnh): Phải tự viết code can thiệp thủ công (xóa giao diện cũ, vẽ lại giao diện mới) mỗi khi có dữ liệu thay đổi. | Declarative (Khai báo): Giao diện tự động cập nhật (re-render) một cách thông minh ngay khi trạng thái (State) thay đổi. |
| **Quản lý sự kiện & Lọc** | Gắn sự kiện bằng `addEventListener`, logic xử lý DOM và logic dữ liệu thường nằm rải rác, đan xen nhau. | Quản lý tập trung bằng `useState`, tối ưu hiệu suất bộ lọc bằng `useMemo`, truyền sự kiện và dữ liệu rành mạch qua Props. |