// src/components/NewsList.jsx
import { Link } from 'react-router-dom';

function NewsList({ articles }) {
  return (
    <div className="news-grid">
      {articles.map((article, index) => (
        <div className="news-card" key={index}>
          <img src={article.image || '/images/placeholder.jpg'} alt={article.title} className='dfdf' />
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <Link to={`/article/${encodeURIComponent(article.title)}`} state={{ article }}>
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
