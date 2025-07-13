import { Link } from "react-router-dom";
import { useFavorites } from '../context/FavoritesContext';

function NewsItem({ article, isFavoritePage = false }) {
  const { title, image, description, publishedAt, content } = article;
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const isFavorite = favorites.some((item) => item.title === article.title);

  const handleUnfavorite = () => {
    removeFromFavorites(article.title);
  };

  const handleAddFavorite = () => {
    addToFavorites(article);
  };

  return (
    <div className="news-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><small>{new Date(publishedAt).toLocaleString()}</small></p>
      

      {isFavoritePage && (
        <button className="unfavorite-btn" onClick={handleUnfavorite}>
          Delete this news from favorites
        </button>
      )}

      {!isFavoritePage && (
        <button
          className="favorite-btn"
          onClick={isFavorite ? handleUnfavorite : handleAddFavorite}
        >
          {isFavorite ? "Unfavorite" : "Favorite"}
        </button>
      )}


      <Link to={`/article/${encodeURIComponent(article.title)}`} state={{ article }}>
        Read More
      </Link>
    </div>
  );
}

export default NewsItem;
