import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <form className="search-bar__form" onSubmit={props.handleSubmit}>
        <input className="search-bar__input" type="text" placeholder="Search by Ingredient or Dish" value={props.searchValue} onChange={props.handleValue} />
        <button className="btn">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
