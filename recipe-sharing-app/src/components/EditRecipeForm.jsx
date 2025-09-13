import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ ...recipe, title, description });
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h3>Edit Recipe</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
