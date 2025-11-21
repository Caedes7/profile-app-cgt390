export default function Header({ title }) {
  return (
    <header className="site-header">
      <nav className="nav">
        <ul className="nav__links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Profiles</a></li>
        </ul>
      </nav>

      <div className="hero">
        <h1>{title}</h1>
      </div>
    </header>
  );
}
