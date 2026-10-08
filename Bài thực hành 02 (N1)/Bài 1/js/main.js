import { getBooks, addBookAPI, deleteBookAPI } from './api.js';
import { createBookCard } from './ui.js';

let books = [];
let favorites = JSON.parse(localStorage.getItem('favBooks')) || [];

const bookListEl = document.getElementById('book-list');
const searchInput = document.getElementById('search-input');
const genreSelect = document.getElementById('genre-select');
const statusText = document.getElementById('status-text');

// Khởi tạo
async function init() {
  document.getElementById('loading').classList.remove('hidden');
  try {
    books = await getBooks();
    setupGenres(books);
    renderBooks(books);
    updateFavCount();
  } catch (error) {
    alert(error.message);
  } finally {
    document.getElementById('loading').classList.add('hidden');
  }
}

// Render sách và trạng thái
function renderBooks(listToRender) {
  bookListEl.innerHTML = '';
  listToRender.forEach(book => {
    const isFav = favorites.includes(book.id);
    bookListEl.appendChild(createBookCard(book, isFav));
  });
  statusText.textContent = `Đang hiển thị ${listToRender.length} / ${books.length} cuốn`;
}

// Lọc thể loại bằng Set (Yêu cầu đề bài)
function setupGenres(booksData) {
  const genres = [...new Set(booksData.map(b => b.genre))];
  genres.forEach(g => {
    const opt = document.createElement('option');
    opt.value = g; opt.textContent = g;
    genreSelect.appendChild(opt);
  });
}

// Tìm kiếm & Lọc (Kết hợp)
function filterBooks() {
  const text = searchInput.value.toLowerCase();
  const genre = genreSelect.value;
  const filtered = books.filter(b => 
    b.title.toLowerCase().includes(text) && 
    (genre === 'all' || b.genre === genre)
  );
  renderBooks(filtered);
}
searchInput.addEventListener('input', filterBooks);
genreSelect.addEventListener('change', filterBooks);

// Event Delegation cho Nút Yêu thích & Xóa
bookListEl.addEventListener('click', async (e) => {
  const card = e.target.closest('.book-card');
  if (!card) return;
  const id = card.dataset.id;

  // Xử lý Yêu thích
  if (e.target.classList.contains('fav-btn')) {
    if (favorites.includes(id)) {
      favorites = favorites.filter(favId => favId !== id);
    } else {
      favorites.push(id);
    }
    localStorage.setItem('favBooks', JSON.stringify(favorites));
    renderBooks(books); // Re-render để cập nhật text nút
    updateFavCount();
  }

  // Xử lý Xóa (Có Confirm + Gọi DELETE)
  if (e.target.classList.contains('del-btn')) {
    if (confirm('Bạn chắc chắn muốn xóa sách này?')) {
      await deleteBookAPI(id);
      books = books.filter(b => b.id !== id);
      filterBooks(); // Render lại theo filter hiện tại
    }
  }
});

function updateFavCount() {
  document.getElementById('fav-count').textContent = favorites.length;
}

// Validate Form thêm sách
// Validate Form thêm sách
const form = document.getElementById('add-book-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Lấy dữ liệu
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const genre = document.getElementById('genre').value.trim();
  const year = parseInt(document.getElementById('year').value);
  let isValid = true;

  // Validate Tên sách
  if (title.length < 3) {
    document.getElementById('title-err').textContent = "Tên sách phải từ 3 ký tự trở lên";
    isValid = false;
  } else { document.getElementById('title-err').textContent = ""; }

  // Validate Tác giả
  if (!author) {
    document.getElementById('author-err').textContent = "Vui lòng nhập tên tác giả";
    isValid = false;
  } else { document.getElementById('author-err').textContent = ""; }

  // Validate Thể loại
  if (!genre) {
    document.getElementById('genre-err').textContent = "Vui lòng nhập thể loại";
    isValid = false;
  } else { document.getElementById('genre-err').textContent = ""; }

  // Validate Năm xuất bản
  const currentYear = new Date().getFullYear();
  if (!year || year < 1900 || year > currentYear) {
    document.getElementById('year-err').textContent = `Năm xuất bản phải từ 1900 đến ${currentYear}`;
    isValid = false;
  } else { document.getElementById('year-err').textContent = ""; }

  // Nếu hợp lệ -> Gọi API thêm sách
  if (isValid) {
    const newBookData = { title, author, genre, year };
    try {
      const newBook = await addBookAPI(newBookData);
      books.unshift(newBook); // Đẩy sách mới lên đầu mảng
      
      // Nếu là thể loại mới tinh, thêm vào dropdown
      const isGenreExist = [...genreSelect.options].some(opt => opt.value === genre);
      if (!isGenreExist) {
        const opt = document.createElement('option');
        opt.value = genre; opt.textContent = genre;
        genreSelect.appendChild(opt);
      }

      filterBooks(); // Render lại danh sách
      form.reset(); // Xóa trắng form
      alert("Thêm sách thành công!");
    } catch (error) {
      alert("Đã xảy ra lỗi khi thêm sách!");
    }
  }
});

// Chế độ sáng tối (Yêu cầu nâng cao)
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

init();