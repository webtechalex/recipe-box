import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import recipesReducer from '../reducers/recipes';
import Container from './Container';

const store = createStore(recipesReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;