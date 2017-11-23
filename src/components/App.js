import React, { Component } from 'react';

import RecipeList from '../containers/recipe_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <RecipeList />
      </div>
    );
  }
}