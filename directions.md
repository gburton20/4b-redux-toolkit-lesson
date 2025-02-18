# Redux Toolkit - Lesson

**This is an early draft of the directions for this lesson.**

### Setup

You can simply run `npm install`to install the dependencies.

### Instructions

1. Add Provider and the store to `main.jsx`.
2. Change `RecipesList.jsx` to use the `useSelector` hook to get the recipes from the store.
3. Add a preferences reducer.
4. Change the `RecipeList` component to grab `view` from the store.
4. Render `Preferences` in `RecipeList`.
5. Add a `toggleView` action to the preferences slice.
6. Add dispatching the `toggleView` action to the `Preferences` component.
7. Switch the `RecipeDetail` component to use the `useSelector` hook to get the recipe from the store.
8. Add a `deleteRecipe` action to the recipes slice.
9. Add dispatching the `deleteRecipe` action to the `RecipeDetail` component.
10. Add recipe.
