export default function Header({ favCount }) {
  return (
    <header>
      <h1>Thư Viện Của Lớp (React)</h1>
      <div className="header-actions">
        <span>Yêu thích: <strong>{favCount}</strong></span>
      </div>
    </header>
  );
}