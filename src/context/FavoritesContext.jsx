import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (article) => {
    if (!favorites.find((item) => item.title === article.title)) {
      setFavorites([article, ...favorites]);
    }
  };

  const removeFromFavorites = (title) => {
    setFavorites(favorites.filter((item) => item.title !== title));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
