import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = {
    id: '1',
    name: 'Spaghetti Bolognese',
    ingredients: ['spaghetti', 'minced beef', 'onion', 'garlic', 'tomato sauce', 'olive oil', 'carrot'],
    category: 'Italian'
  }

  const [editing, setEditing] = useState(false);

  function handleSave() {
  }

  function handleDelete() {
  }

  function handleAddIngredient() {
  }

  function handleIngredientChange(index, value) {
  }

  return (
    <div>
      {editing ? (
        <div style={{display: "flex", flexDirection: "column"}}>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={handleAddIngredient}>Add Ingredient</button>
          {ingredients.map((ingredient, index) => (
            <input
              key={index}
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
            />
          ))}

          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;
