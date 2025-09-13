import React from "react";
import { useParams, Link } from "react-router-dom";
import useRecipeStore from "../components/recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeForm from "./EditRecipeForm";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      {/* Delete button */}
      <DeleteRecipeButton id={recipe.id} afterDeletePath="/" />

      {/* Edit form */}
      <EditRecipeForm recipe={recipe} />

      <br />
      <Link to="/">⬅ Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetails;
