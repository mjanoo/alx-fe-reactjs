import { useState } from "react";
import useRecipeStore from "../components/recipeStore";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients) return;

    addRecipe({
      id: Date.now(),
      title,
      ingredients,
    });

    setTitle("");
    setIngredients("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h3>Add a New Recipe</h3>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", margin: "8px 0", padding: "8px", width: "100%" }}
      />
      <textarea
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        style={{ display: "block", margin: "8px 0", padding: "8px", width: "100%" }}
      />
      <button type="submit" style={{ padding: "8px 16px" }}>Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
