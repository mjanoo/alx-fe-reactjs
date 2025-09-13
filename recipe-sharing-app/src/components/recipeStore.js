import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(term);
  },

  filterRecipes: (term = get().searchTerm) => {
    const filtered = get().recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  addRecipe: (recipe) => {
    const updated = [...get().recipes, recipe];
    set({ recipes: updated, filteredRecipes: updated });
  },

  deleteRecipe: (id) => {
    const updated = get().recipes.filter(r => r.id !== id);
    set({ recipes: updated, filteredRecipes: updated });
  },
}));

export default useRecipeStore;
