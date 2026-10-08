import { useState, useMemo } from 'react';
import { initialBooks } from './data/books';
import Header from './components/Header';
import Section from './components/Section';
import GenreFilter from './components/GenreFilter';
import BookList from './components/BookList';
import Footer from './components/Footer';

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [favorites, setFavorites] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('all');

  const genres = useMemo(() => {
    return [...new Set(books.map(b => b.genre))];
  }, [books]);

  const filteredBooks = useMemo(() => {
    if (selectedGenre === 'all') return books;
    return books.filter(b => b.genre === selectedGenre);
  }, [books, selectedGenre]);

  const handleToggleFav = (id) => {
    setFavorites(prevFavs => {
      if (prevFavs.includes(id)) {
        return prevFavs.filter(favId => favId !== id);
      } else {
        return [...prevFavs, id];
      }
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sách này?")) {
      setBooks(prevBooks => prevBooks.filter(b => b.id !== id));
      setFavorites(prevFavs => prevFavs.filter(favId => favId !== id));
    }
  };

  return (
    <div>
      <Header favCount={favorites.length} />
      
      <main>
        <Section title="Bộ Lọc Sách">
          <GenreFilter 
            genres={genres} 
            selectedGenre={selectedGenre} 
            onSelect={setSelectedGenre} 
          />
        </Section>

        <Section title="Danh Sách Thư Viện">
          <p id="status-text">
            Đang hiển thị {filteredBooks.length} / {books.length} cuốn
          </p>
          <BookList 
            books={filteredBooks}
            favorites={favorites}
            onToggleFav={handleToggleFav}
            onDelete={handleDelete}
          />
        </Section>
      </main>

      <Footer />
    </div>
  );
}

export default App;