import React from 'react';

import Header from './Header';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';

const API_KEY = '7aea076021cf86fce0c45ec2df09716d';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      recipes: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValue = this.handleValue.bind(this);
  }

  handleValue(e) {
    this.setState({ searchValue: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleApiCall();
  }

  handleApiCall() {
    const search = `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${this.state.searchValue}&count=5`;
    fetch(search).then((results) => {
      return results.json();
    }).then((data) => {
      this.setState({ recipes: data });
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <SearchBar
          searchValue={this.state.searchValue}
          handleValue={this.handleValue}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList recipes={this.state.recipes} searchValue={this.state.searchValue} />
      </div>
    );
  }
}

export default App;
