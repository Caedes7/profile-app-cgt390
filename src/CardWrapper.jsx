export default function CardWrapper({ title, children }) {
  return (
    <section className="cards-section">
      {title && <h2 className="cards-title">{title}</h2>}
      <div className="cards">
        {children}
      </div>
    </section>
  );
}
