export default function BookCard({ book, isFavorite, onToggleFav, onDelete }) {
  return (
    <article className="book-card">
      <h3>{book.title}</h3>
      <p>Tác giả: {book.author}</p>
      <p>Thể loại: {book.genre}</p>
      <p>Năm XB: {book.year}</p>
      
      <div className="button-group">
        <button 
          className="fav-btn" 
          onClick={() => onToggleFav(book.id)}
        >
          {isFavorite ? '⭐ Bỏ Yêu thích' : '⭐ Yêu thích'}
        </button>
        <button 
          className="del-btn" 
          onClick={() => onDelete(book.id)}
        >
          🗑️ Xóa
        </button>
      </div>
    </article>
  );
}