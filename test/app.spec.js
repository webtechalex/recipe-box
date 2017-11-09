import {expect} from 'chai';

import recipesReducer from '../src/reducers/recipes';
import inputReducer from '../src/reducers/input';
import {addRecipe, removeRecipe, editRecipe, editRecipeName, editRecipeIngredients} from '../src/actions';

describe('Test environment', function() {
  it('should run a test', function() {
    expect(true).to.equal(true);
  });
});

describe('Application state', function() {
  it('should return the intial state when no action is givem', function() {
    expect(recipesReducer()).to.eql([]);
    expect(recipesReducer(['pizza'])).to.eql(['pizza']);
  });
  it('should return the previous state given an unrecognised action', function() {
    expect(recipesReducer([], 'BBBLLLLLLLLLAAAAAAAAAAAHHH')).to.eql([]);
  });
  it('should return the correct action from addRecipe action creator', function() {
    const action = {
      type: 'ADD_RECIPE',
      name: 'Pizza',
      ingredients: ['dough', 'cheese', 'tomato', 'pepperoni', 'anchovies']
    }
    expect(addRecipe('Pizza', ['dough', 'cheese', 'tomato', 'pepperoni', 'anchovies'])).to.eql(action);
  });
  it('should add a recipe to the application state with action: ADD_RECIPE', function() {
    const newState = [
      {
        name: 'Pizza',
        ingredients: ['dough', 'cheese', 'tomato', 'pepperoni', 'anchovies']
      }
    ];
    expect(recipesReducer([], addRecipe('Pizza', ['dough', 'cheese', 'tomato', 'pepperoni', 'anchovies']))).to.eql(newState);
  });
  it('should remove the correct recipe from the application state with action: REMOVE_RECIPE', function() {
    const oldState = [
      {
        name: 'Pomodoro Pasta',
        ingredients: ['cheese', 'tomoatoes', 'pasta', 'brocolli', 'chillis']
      },
      {
        name: 'Chickpea and Veggie Burger',
        ingredients: ['chickpeas', 'peppers', 'tomato', 'cheese', 'chillis']
      },
      {
        name: 'Pizza',
        ingredients: ['dough', 'cheese', 'tomato', 'pepperoni', 'anchovies']
      }
    ];
    const newState = [
      {
        name: 'Pomodoro Pasta',
        ingredients: ['cheese', 'tomoatoes', 'pasta', 'brocolli', 'chillis']
      },
      {
        name: 'Chickpea and Veggie Burger',
        ingredients: ['chickpeas', 'peppers', 'tomato', 'cheese', 'chillis']
      }
    ];
    expect(recipesReducer(oldState, removeRecipe('Pizza'))).to.eql(newState);
  });
  it('should edit the correct recipe from the application state with action EDIT_RECIPE', function() {
    const oldState = [
      {
        name: 'Pomodoro Pasta',
        ingredients: ['cheese', 'tomoatoes', 'pasta', 'brocolli', 'chillis']
      },
      {
        name: 'Chickpea and Veggie Burger',
        ingredients: ['chickpeas', 'peppers', 'tomato', 'cheese', 'chillis']
      },
      {
        name: 'Pizza',
        ingredients: ['dough', 'cheese', 'tomato', 'pepperoni', 'anchovies']
      }
    ];
    const newState = [
      {
        name: 'Pomodoro Pasta',
        ingredients: ['cheese', 'tomoatoes', 'pasta', 'brocolli', 'chillis']
      },
      {
        name: 'Chickpea and Veggie Burger',
        ingredients: ['chickpeas', 'peppers', 'tomato', 'cheese', 'chillis']
      },
      {
        name: 'Chicken Pizza',
        ingredients: ['dough', 'cheese', 'pepperoni', 'chicken', 'black olives', 'jalapenos', 'red onions']
      }
    ];
    expect(recipesReducer(oldState, editRecipe('Pizza', 'Chicken Pizza', ['dough', 'cheese', 'pepperoni', 'chicken', 'black olives', 'jalapenos', 'red onions']))).to.eql(newState);
  });
});

describe('Input fields', function() {
  const defaultState = {
    name: '',
    ingredients: ''
  }
  it('should return the initial state when no action is given', function() {
    expect(inputReducer()).to.eql(defaultState);
  });
  it('should return the previous state given an unrecognised action', function() {
    expect(inputReducer({name: 'Pizza', ingredients: 'tomatoes, dough, black olives, jalapenos, chicken'}, 'BBBLLLLLLLLLAAAAAAAAAAAHHH')).to.eql({name: 'Pizza', ingredients: 'tomatoes, dough, black olives, jalapenos, chicken'});
  });
  it('should return the correct action from editRecipeName action creator', function() {
    const action = {
      type: 'EDIT_RECIPE_NAME',
      name: 'Pizza',
    }
    expect(editRecipeName('Pizza')).to.eql(action);
  });
  it('should return the correct action from editRecipeIngredients action creator', function() {
    const action = {
      type: 'EDIT_RECIPE_INGREDIENTS',
      ingredients: 'tomatoes, dough, black olives, jalapenos, chicken',
    }
    expect(editRecipeIngredients('tomatoes, dough, black olives, jalapenos, chicken')).to.eql(action);
  });
  it('should edit recipe name from the correct recipe with action: EDIT_RECIPE_NAME', function() {
    const oldRecipe = {
      name: 'Pizza',
      ingredients: 'tomatoes, dough, black olives, jalapenos, chicken'
    }
    const newRecipe = {
      name: 'Chicken Pizza',
      ingredients: 'tomatoes, dough, black olives, jalapenos, chicken'
    } 
    expect(inputReducer(oldRecipe, editRecipeName('Chicken Pizza'))).to.eql(newRecipe);
  });
  it('should edit recipe ingredients from the correct recipe with action: EDIT_RECIPE_INGREDIENTS', function() {
    const oldRecipe = {
      name: 'Pizza',
      ingredients: 'tomatoes, dough, black olives, jalapenos, chicken'
    }
    const newRecipe = {
      name: 'Pizza',
      ingredients: 'tomatoes, dough, black olives, jalapenos, pepperoni, chillis'
    } 
    expect(inputReducer(oldRecipe, editRecipeIngredients('tomatoes, dough, black olives, jalapenos, pepperoni, chillis'))).to.eql(newRecipe);
  });
});