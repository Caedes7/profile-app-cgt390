export default function Header({ title, links = [] }) {
  // Conditional class based on number of links (just to show JSX logic)
  const headerClass =
    links.length > 0 ? 'site-header site-header--nav' : 'site-header';

  return (
    <header className={headerClass}>
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
