import { Link } from "react-router-dom";
import RecipeItem from "./RecipeItem";

const recipes = [
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
];
import RecipeForm from "./RecipeForm";

function RecipeList() {
  const listStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "10px",
  };

  return (
    <>
      <h3>Add a recipe</h3>
      <RecipeForm />
      <h1>Recipes</h1>
      <div style={gridStyles}>
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <RecipeItem recipe={recipe} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default RecipeList;
