import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  if (!recipes || recipes.length === 0) {
    return <p>No recipes found. Try adding or searching! 🍲</p>;
  }

  return (
    <div>
      <h3>All Recipes</h3>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} style={{ marginBottom: "10px" }}>
            <Link to={`/recipes/${recipe.id}`} style={{ color: "blue" }}>
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
