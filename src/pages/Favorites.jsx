import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import NewsList from '../components/NewsList';

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="page-wrapper set-container">
      <h1>My Favorite News</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet. Add some news to your list!</p>
      ) : (
        <NewsList articles={favorites} isFavoritePage={true} />
      )}
    </div>
  );
}

export default Favorites;
