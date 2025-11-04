export default function Header({ title, tagline, compact = false }) {
  const headerClass = compact ? 'header header--compact' : 'header';
  return (
    <header className={headerClass}>
      <h1>{title}</h1>
      {tagline && <p className="tagline">{tagline}</p>}
    </header>
  );
}