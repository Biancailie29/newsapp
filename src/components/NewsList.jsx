// src/components/NewsList.jsx
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

function NewsList({ articles, isFavoritePage = false }) {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  return (
    <div className="news-grid">
      {articles.map((article, index) => {
        const isFavorite = favorites.some((item) => item.title === article.title);

        const handleUnfavorite = () => {
          removeFromFavorites(article.title);
        };

        const handleAddFavorite = () => {
          addToFavorites(article);
        };

        return (
          <div className="news-card" key={index}>
            <img src={article.image || '/images/placeholder.jpg'} alt={article.title} />

            <h3>{article.title}</h3>
            <p>{article.description}</p>

            <div className="news-actions">
              <Link
                className="read-more-btn"
                to={`/article/${encodeURIComponent(article.title)}`}
                state={{ article }}
              >
                Read More
              </Link>

              {isFavoritePage ? (
                <button className="unfavorite-btn" onClick={handleUnfavorite}>
                  Remove from Favorites
                </button>
              ) : (
                <button
                  className="favorite-btn"
                  onClick={isFavorite ? handleUnfavorite : handleAddFavorite}
                >
                  {isFavorite ? 'Unfavorite' : 'Favorite'}
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NewsList;
