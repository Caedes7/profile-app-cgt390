export default function ProfileCard({
  title,
  subtitle,
  imgSrc,
}) {
  const cls = 'card';

  return (
    <article className={cls}>
      {imgSrc && (
        <div className="card__media">
          <img src={assets/man-art.jpg} alt={title} />
        </div>
      )}

      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        {subtitle && <p className="card__subtitle">{subtitle}</p>}
      </div>
    </article>
  );
}
