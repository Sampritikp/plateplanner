import React, { useState } from 'react';
import './index.css';

const CreateRecipe = () => {
  const [recipes, setRecipes] = useState([
    { id: 1, title: 'Pasta Carbonara', ingredients: 'Pasta, eggs, pancetta, Parmesan cheese' },
    { id: 2, title: 'Chocolate Cake', ingredients: 'Flour, sugar, cocoa powder, eggs, butter' },
  ]);

  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentRecipeId, setCurrentRecipeId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedRecipes = recipes.map((recipe) =>
        recipe.id === currentRecipeId ? { ...recipe, ...formData } : recipe
      );
      setRecipes(updatedRecipes);
      setIsEditing(false);
      setCurrentRecipeId(null);
    } else {
      const newRecipe = {
        id: recipes.length + 1,
        title: formData.title,
        ingredients: formData.ingredients,
      };
      setRecipes([...recipes, newRecipe]);
    }
    setFormData({
      title: '',
      ingredients: '',
    });
  };

  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  const handleEdit = (recipe) => {
    setFormData({
      title: recipe.title,
      ingredients: recipe.ingredients,
    });
    setIsEditing(true);
    setCurrentRecipeId(recipe.id);
  };

  return (
    <div className="create-recipe">
      <div className="recipe-form">
        <h2>{isEditing ? 'Edit Recipe' : 'Add Recipe'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Recipe Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ingredients">Ingredients</label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            {isEditing ? 'Save Changes' : 'Add Recipe'}
          </button>
        </form>
      </div>
      <div className="recipe-list">
        <h2>Recipe List</h2>
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.ingredients}</p>
              <div className="recipe-actions">
                <button className="edit-button" onClick={() => handleEdit(recipe)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(recipe.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateRecipe;

