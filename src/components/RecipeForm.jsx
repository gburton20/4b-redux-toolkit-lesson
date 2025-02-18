import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RecipeForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([""]);

  function handleAddIngredient() {
  }

  function handleIngredientChange(index, value) {
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '400px',
    gap: '10px',
    height: '100%',
  }

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Recipe Name"
      />

      {ingredients.map((ingredient, index) => (
        <input
          key={index}
          value={ingredient}
          onChange={(e) => handleIngredientChange(index, e.target.value)}
          placeholder="Ingredient"
        />
      ))}

      <button type="button" onClick={handleAddIngredient}>
        Add Ingredient
      </button>

      <button type="submit">Save</button>
    </form>
  );
}

export default RecipeForm;
