import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  // Set all recipes
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  // Search term update
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(term);
  },

  // Filter recipes by title
  filterRecipes: (term = get().searchTerm) => {
    const filtered = get().recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  // Add new recipe
  addRecipe: (recipe) => {
    const updated = [...get().recipes, recipe];
    set({ recipes: updated, filteredRecipes: updated });
  },

  // Delete recipe by ID
  deleteRecipe: (id) => {
    const updated = get().recipes.filter((r) => r.id !== id);
    set({ recipes: updated, filteredRecipes: updated });
  },

  // --- NEW FAVORITES FEATURES ---

  // Add to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])], // avoid duplicates
    })),

  // Remove from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Generate recommendations (mocked for now)
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) =>
        !favorites.includes(recipe.id) && // exclude already-favorited
        Math.random() > 0.5 // random demo
    );
    set({ recommendations: recommended });
  },
}));

export default useRecipeStore;
