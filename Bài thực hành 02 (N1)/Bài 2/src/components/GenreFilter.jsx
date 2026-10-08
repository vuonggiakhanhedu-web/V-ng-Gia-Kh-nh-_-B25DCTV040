export default function GenreFilter({ genres, selectedGenre, onSelect }) {
  return (
    <div className="toolbar">
      <select value={selectedGenre} onChange={(e) => onSelect(e.target.value)}>
        <option value="all">Tất cả thể loại</option>
        {genres.map(g => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>
    </div>
  );
}