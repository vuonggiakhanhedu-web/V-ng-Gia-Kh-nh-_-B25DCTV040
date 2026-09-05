const body = document.body;
const btn = document.getElementById('nut-doi-mau');

btn.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});


const theLoiChao = document.getElementById('loi-chao');
const gioHienTai = new Date().getHours();
let thongDiep = "";
if (gioHienTai >= 5 && gioHienTai < 12) {
    thongDiep = "Chào buổi sáng! Chúc thầy một ngày làm việc hiệu quả.";
} else if (gioHienTai >= 12 && gioHienTai < 18) {
    thongDiep = "Chào buổi chiều!";
} else {
    thongDiep = "Chào buổi tối!";
}
theLoiChao.innerText = thongDiep;