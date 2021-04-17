import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>  
  <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
//We imported Provider from React Redux
//We used Provider to wrap our React application
//impWe passed our store instance into Provider as a prop, making it available to all of our other components.