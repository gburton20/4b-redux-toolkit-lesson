import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
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

  preferences: {
    view: 'grid',
    units: 'metric',
    darkMode: 'false',
  }
};

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: initialState.recipes,
  reducers: {
    deleteRecipe: function(recipes, action) {
      // console.log(action);
      const i = recipes.findIndex((recipe) => recipe.id === action.payload);
      recipes.splice(i, 1);
      // Or if you prefer,:
      // return recipes.filter((recipe) => recipe.id !== action.payload);
    },

    addRecipe: function(recipes, action) {
      console.log(action);
      recipes.push(action.payload);
      // Or, as immutable code:
      // return [...recipes, action.payload];
    }
  }
});

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: initialState.preferences,
  reducers: {
    toggleView: function(preferences) {
      // console.log works when toggling the List/Grid view button:
      console.log(preferences.view);
      preferences.view = preferences.view === 'list' ? 'grid' : 'list';
    }
  }
});
// Don't have to write this anymore! (1 of 2)
function preferencesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_VIEW':
    return {
      ...state, 
      preferences: {
        ...state.preferences,
        view: state.preferences.view === 'list' ? 'grid' : 'list'
      }
    }
    default: return state;
  }
}

// Or this!
function recipesReducer(state, action) {
  switch (action.type) {
    case 'DELETE_RECIPE':
      return {
        ...state,
        recipes: recipes.filter((recipe) => recipe.id !== action.payload)
      }
  }
}

// Or these, which we didn't even have to bother to show you (2 of 2)
// They're a neccessary part of Redux, but SO ANNOYING TO WRITE
// const toggleView = () => ({type: 'TOGGLE_VIEW'})

const store = configureStore({
  reducer: {
    recipes: recipeSlice.reducer,
    preferences: preferencesSlice.reducer,
  }
});

// An alternative way to export stuff:
export const {toggleView} = preferencesSlice.actions;
export const {deleteRecipe, addRecipe} = recipeSlice.actions;

export default store;