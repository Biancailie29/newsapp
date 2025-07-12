import { Link } from "react-router-dom";

function NewsItem({ article }) {
  const { title, image, description, publishedAt, content } = article;

  return (
    <div className="news-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><small>{new Date(publishedAt).toLocaleString()}</small></p>
      <Link
        to={`/article/${encodeURIComponent(title)}`}
        state={{ article }} // ✅ Passing full article as state
      >
        Read More
      </Link>
    </div>
  );
}

export default NewsItem;
