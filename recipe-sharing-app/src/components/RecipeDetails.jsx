import React from "react";
import { useParams, Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams(); // get recipe ID from URL
  const recipes = useRecipeStore((state) => state.recipes);

  // Find the recipe with matching ID
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div style={{ padding: 20 }}>
        <p>Recipe not found!</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h2>{recipe.title}</h2>
      <p>
        <strong>Ingredients:</strong> {recipe.ingredients}
      </p>

      <div style={{ marginTop: 20 }}>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>

      <div style={{ marginTop: 20 }}>
        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
