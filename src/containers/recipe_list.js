import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addRecipe } from '../actions';

import Modal from '../components/modal';

class RecipeList extends Component {
  renderRecipe(recipeData) {
    const { name } = recipeData;
    const noSpacesName = recipeData.name.replace(' ', '');
    const ingredients = recipeData.ingredients.split(',').map(ingredient => <li key={ingredient}>{ingredient.trim()}</li>);

    return (
      <div key={noSpacesName} className="card">
        <div className="card-header" role="tab" id={`heading${noSpacesName}`}>
          <h5 className="mb-0">
            <a data-toggle="collapse" data-parent="#accordion" href={`#collapse${noSpacesName}`} aria-expanded="false" aria-controls={`collapse${noSpacesName}`}>
              {name}
            </a>
          </h5>
        </div>
  
        <div id={`collapse${noSpacesName}`} className="collapse" role="tabpanel" aria-labelledby={`heading${noSpacesName}`}>
          <div className="card-block">
            {ingredients}
            <button type="button" className="btn btn-primary">Edit</button>
            <button type="button" className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div 
          id="accordion" 
          role="tablist" 
          aria-multiselectable="true">
          {this.props.recipes.map(this.renderRecipe)}
        </div>
        <button 
          type="button" 
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#recipeModal">
          Add Recipe
        </button>
        <Modal title="Add a recipe" buttonName="Add Recipe" buttonClickAction={this.props.addRecipe} />
      </div>
    );
  }
}

function mapStateToProps({ recipes }) {
  return { recipes };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);