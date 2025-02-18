import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  preferences: {
    view: "list", // or 'grid'
    units: "metric", // or 'imperial'
  },

  recipes: [
    {
      id: '1',
      name: 'Spaghetti Bolognese',
      ingredients: ['spaghetti', 'minced beef', 'onion', 'garlic', 'tomato sauce', 'olive oil', 'carrot'],
      category: 'Italian'
    },
    {
      id: '2',
      name: 'Chicken Curry',
      ingredients: ['chicken', 'curry powder', 'onion', 'garlic', 'coconut milk', 'ginger', 'tomato'],
      category: 'Indian'
    },
    {
      id: '3',
      name: 'Caesar Salad',
      ingredients: ['romaine lettuce', 'croutons', 'parmesan cheese', 'chicken breast', 'caesar dressing', 'lemon'],
      category: 'Salad'
    },
  ],
}

const preferencesSlice = createSlice({
  name: "preferences",
  initialState: initialState.preferences,
  reducers: {
    toggleView(preferences) {
      preferences.view = preferences.view === "list" ? "grid" : "list";
    },
  },
});

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: initialState.recipes,
  reducers: {
    deleteRecipe(recipes, action) {
      return recipes.filter((recipe) => recipe.id !== action.payload);
    }
  }
});

const store = configureStore({
  reducer: {
    preferences: preferencesSlice.reducer,
    recipes: recipeSlice.reducer,
  }
});

export const {toggleView} = preferencesSlice.actions;

export const {deleteRecipe} = recipeSlice.actions;

export default store;
