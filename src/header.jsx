export default function Header({ title, links = [] }) {
  return (
    <header className="site-header">
      <nav className="nav">
        <ul className="nav__links">
          {links.map((text) => (
            <li key={text}>
              <a href="#">{text}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hero">
        <h1>{title}</h1>
      </div>
    </header>
  );
}
