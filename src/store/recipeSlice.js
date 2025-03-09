import { getCategories } from "../services/RecipeService";

export const createRecipeSlice = (set) => ({
    categories: [],
    drinks: [],
    fetchCategories:  async () => {
        const categories = await getCategories();
        set({categories})
    },
    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters);
        set({drinks})
    }
    

})