import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  // Convert favorite IDs → recipe objects
  const favoriteRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean); // avoid nulls

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p className="text-gray-500">No favorites yet. Start adding some!</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="p-3 mb-2 border rounded-lg shadow-sm bg-white"
          >
            <h3 className="font-semibold">{recipe.title}</h3>
            <p className="text-sm text-gray-600">{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
