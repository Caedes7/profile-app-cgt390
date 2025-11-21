export default function Introduction({ summary }) {
  return (
    <section className="intro">
      <h2>About</h2>
      <p className="intro__text">{summary}</p>
    </section>
  );
}
