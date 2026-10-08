export const createBookCard = (book, isFav) => {
  const article = document.createElement('article');
  article.className = 'book-card';
  article.dataset.id = book.id;

  const title = document.createElement('h3');
  title.textContent = book.title;

  const author = document.createElement('p');
  author.textContent = `Tác giả: ${book.author}`;

  // Thêm Thể loại (Chủ đề)
  const genre = document.createElement('p');
  genre.textContent = `Thể loại: ${book.genre}`;

  // Thêm Năm xuất bản
  const year = document.createElement('p');
  year.textContent = `Năm XB: ${book.year}`;

  // Tạo khung chứa để 2 nút nằm trên cùng 1 hàng
  const btnGroup = document.createElement('div');
  btnGroup.className = 'button-group';

  const favBtn = document.createElement('button');
  favBtn.className = 'fav-btn';
  // Thêm icon ngôi sao
  favBtn.innerHTML = isFav ? '⭐ Bỏ Yêu thích' : '⭐ Yêu thích';

  const delBtn = document.createElement('button');
  delBtn.className = 'del-btn';
  // Thêm icon thùng rác
  delBtn.innerHTML = '🗑️ Xóa';

  // Nối các nút vào khung chứa
  btnGroup.append(favBtn, delBtn);
  
  // Nối tất cả vào thẻ bài (card)
  article.append(title, author, genre, year, btnGroup);
  
  return article;
};