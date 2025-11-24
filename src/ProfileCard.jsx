export default function ProfileCard({ name, role, imgSrc, featured = false }) {
  const cardClass = `card ${featured ? 'card--featured' : ''}`;

  return (
    <article className={cardClass}>
      {imgSrc && (
        <div className="card__media">
          <img src={imgSrc} alt={name} />
        </div>
      )}

      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        <p className="card__subtitle">{role}</p>

        {featured && <span className="badge">Featured</span>}
      </div>
    </article>
  );
}
