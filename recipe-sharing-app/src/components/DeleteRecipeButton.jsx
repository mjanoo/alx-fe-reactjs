import React from "react";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "../components/recipeStore";

const DeleteRecipeButton = ({ recipeId, afterDeletePath = "/" }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!window.confirm("Delete this recipe?")) return;
    deleteRecipe(recipeId);
    navigate(afterDeletePath);
  };

  return (
    <button
      onClick={handleDelete}
      style={{ backgroundColor: "red", color: "white", padding: "5px 10px" }}
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
