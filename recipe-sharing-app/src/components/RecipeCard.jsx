import useRecipeStore from './recipeStore';

const RecipeCard = ({ recipe }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white mb-4">
      <h3 className="font-semibold">{recipe.title}</h3>
      <p className="text-sm text-gray-600">{recipe.description}</p>
      <button
        onClick={() =>
          isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)
        }
        className={`mt-2 px-3 py-1 rounded-lg ${
          isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200'
        }`}
      >
        {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeCard;
