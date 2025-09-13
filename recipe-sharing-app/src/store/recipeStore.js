import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],             // full recipe list
  searchTerm: '',          // current search input
  filteredRecipes: [],     // filtered recipes

  // Initialize recipes
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  // Update search term and filter automatically
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(term);
  },

  // Filter recipes by title (can extend later to ingredients or cooking time)
  filterRecipes: (term = get().searchTerm) => {
    const filtered = get().recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },
}));
