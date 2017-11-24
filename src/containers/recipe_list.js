import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecipeList extends Component {
  renderRecipe(recipeData) {
    const name = recipeData.name;
    const noSpacesName = recipeData.name.replace(' ', '');
    const ingredients = recipeData.ingredients.split(',').map(ingredient => <li>{ingredient.trim()}</li>);

    return (
      <div className="card" key={name}>
        <div className="card-header" role="tab" id={`heading${noSpacesName}`}>
          <h5 className="mb-0">
            <a data-toggle="collapse" data-parent="#accordion" href={`#collapse${noSpacesName}`} aria-expanded="true" aria-controls={`collapse${noSpacesName}`}>
              {name}
            </a>
          </h5>
        </div>
  
        <div id={`collapse${noSpacesName}`} className="collapse show" role="tabpanel" aria-labelledby={`heading${noSpacesName}`}>
          <div className="card-block">
            {ingredients}
          </div>
        </div>
      </div>
    );
  }

  render() {
    console.log(this.props.recipes);
    return (
      <div id="accordion" role="tablist" aria-multiselectable="true">
        {this.props.recipes.map(this.renderRecipe)}
      </div>
    );
  }
}

function mapStateToProps({ recipes }) {
  return { recipes };
}

export default connect(mapStateToProps)(RecipeList);