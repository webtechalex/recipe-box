import {expect} from 'chai';

import recipesReducer from '../src/reducers/recipes';
import {addRecipe} from '../src/actions';

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
});