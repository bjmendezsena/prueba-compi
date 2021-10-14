let favorites = [];
export function addFavorite(source) {
  favorites = favorites.concat(source);
  localStorage.setItem("favoritesResources", JSON.stringify(favorites));
  return favorites;
}

export function removeFavorite(id) {
  favorites = favorites && favorites.filter((source) => source.id !== id);
  localStorage.setItem("favoritesResources", JSON.stringify(favorites));
  return favorites;
}

export function getFavorites() {
  const favorites = localStorage.getItem("favoritesResources");
  return JSON.parse(favorites);
}
