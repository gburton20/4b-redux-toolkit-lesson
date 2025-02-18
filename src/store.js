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
  ]
}

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: initialState,
});

const store = configureStore({
  reducer: recipeSlice.reducer
});

export default store;
