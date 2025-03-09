import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice } from "../store/recipeSlice";

export const useAppStore = create(devtools((...args) => ({
    ...createRecipeSlice(...args)
    })));