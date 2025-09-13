import { Link } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) {
    return <p>No recipes yet. Add one above! 🍲</p>;
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
