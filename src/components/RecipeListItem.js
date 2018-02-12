import React from 'react';

const RecipeListItem = (props) => {
  return (
    <li>
      <hr />
      <h2 className="recipe-list__subtitle">{props.recipe.title}</h2>
      <div className="recipe-list__links">
        <a className="btn btn--rounded-left" href={props.recipe.f2f_url} target="_blank">
          Food2Fork
        </a>
        <a className="btn btn--rounded-right" href={props.recipe.source_url} target="_blank">
          {props.recipe.publisher}
        </a>
      </div>
      <img className="recipe-list__img" src={props.recipe.image_url} alt={props.recipe.title} />
    </li>
  );
};

export default RecipeListItem;
