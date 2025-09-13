import { useEffect } from "react";
import AddRecipeForm from "../components/AddRecipeForm";
import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";
import useRecipeStore from "../components/recipeStore";

const Home = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    // Initialize sample recipes
    const initialRecipes = [
      { id: 1, title: "Pancakes", ingredients: "Flour, Eggs, Milk" },
      { id: 2, title: "Salad", ingredients: "Lettuce, Tomato, Cucumber" },
      { id: 3, title: "Spaghetti", ingredients: "Pasta, Tomato Sauce" },
    ];
    setRecipes(initialRecipes);
  }, [setRecipes]);

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h1>🍲 Recipe Sharing App</h1>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default Home;
