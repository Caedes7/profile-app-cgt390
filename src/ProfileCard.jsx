export default function ProfileCard({
  title,
  subtitle,
  imgSrc,
  featured = false,
  children,
}) {
  const cls = `card ${featured ? 'card--featured' : ''}`;

  return (
    <article className={cls}>
      {imgSrc && (
        <div className="card__media">
          <img src={imgSrc} alt={title} />
        </div>
      )}
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        {subtitle && <p className="card__subtitle">{subtitle}</p>}
        {children && <div className="card__content">{children}</div>}
      </div>
    </article>
  );
}