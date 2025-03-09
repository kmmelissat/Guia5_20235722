import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice } from "../store/recipeSlice";
import { createFavoritesSlice } from "../store/favoriteSlice";

export const useAppStore = create(devtools((...args) => ({
    ...createRecipeSlice(...args),
    ...createFavoritesSlice(...args)

    })));