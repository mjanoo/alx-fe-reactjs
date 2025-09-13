import { useEffect } from "react";
import AddRecipeForm from "../components/AddRecipeForm";
import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";
import FavoritesList from "../FavoritesList";
import RecommendationsList from "../RecommendationsList";
import useRecipeStore from "../components/recipeStore";

const Home = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    // Initialize sample recipes
    const initialRecipes = [
      { id: 1, title: "Pancakes", description: "Flour, Eggs, Milk" },
      { id: 2, title: "Salad", description: "Lettuce, Tomato, Cucumber" },
      { id: 3, title: "Spaghetti", description: "Pasta, Tomato Sauce" },
    ];
    setRecipes(initialRecipes);
  }, [setRecipes]);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <h1>🍲 Recipe Sharing App</h1>
      <SearchBar />
      <AddRecipeForm />

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20 }}>
        {/* Left side: Recipe List */}
        <div>
          <RecipeList />
        </div>

        {/* Right side: Favorites + Recommendations */}
        <div>
          <FavoritesList />
          <RecommendationsList />
        </div>
      </div>
    </div>
  );
};

export default Home;
