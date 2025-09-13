import React from "react";
import useRecipeStore from "./recipeStore";

const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Search recipes..."
      onChange={handleChange}
      style={{ padding: "8px", width: "100%", marginBottom: "20px" }}
    />
  );
};

export default SearchBar;
