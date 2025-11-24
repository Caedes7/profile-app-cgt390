export default function Introduction({ title, summary }) {
  return (
    <section className="intro">
      <h2>{title}</h2>
      <p className="intro__text">{summary}</p>
    </section>
  );
}
