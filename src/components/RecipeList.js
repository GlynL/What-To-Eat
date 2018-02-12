import React from 'react';
import RecipeListItem from './RecipeListItem'

const RecipeList = (props) => {
  const recipeItems = props.recipes && props.recipes.recipes.map((recipe) => (
    <RecipeListItem recipe={recipe} className="recipe-list__item" key={recipe.recipe_id} />
  ));

  return (
    <div className="recipe-list container">
      {props.recipes && <h1 className="recipe-list__title">Recipes for {props.searchValue}</h1>}
      <ul className="recipe-list__list">
        {recipeItems}
      </ul>
    </div>
  );
};

export default RecipeList;
