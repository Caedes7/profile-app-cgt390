export default function Introduction({ name, role, summary, links = [] }) {
  return (
    <section className="intro">
      <h2>About {name}</h2>
      <p className="intro__role">{role}</p>
      <p className="intro__summary">{summary}</p>

      {links.length > 0 && (
        <ul className="intro__links">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer">{label}</a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}