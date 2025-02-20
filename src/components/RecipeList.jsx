import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import RecipeItem from "./RecipeItem";
import RecipeForm from "./RecipeForm";
import Preferences from "./Preferences";

function RecipeList() {
  const recipes = useSelector((state) => state.recipes);
  const view = useSelector((state) => state.preferences.view);
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
      <Preferences />
      <div style={view === 'list' ? listStyles : gridStyles }>
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