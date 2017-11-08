import {expect} from 'chai';

import recipesReducer from '../src/reducers/recipes';

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
  })
  xit('should add a recipe to the application state with action: ADD_RECIPE', function() {

  });
});