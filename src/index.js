import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const initialState = {
  counters: [
    { id: 0, count: 1 },
    { id: 1, count: 1 },
    { id: 2, count: 1 },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counters: state.counters.map((element) => {
          if (action.payload === element.id) {
            return { id: element.id, count: element.count + 1 };
          }
          return { id: element.id, count: element.count };
        }),
      };
    case 'DECREMENT':
      return {
        ...state,
        counters: state.counters.map((element) => {
          if (action.payload === element.id) {
            return { id: element.id, count: element.count - 1 };
          }
          return { id: element.id, count: element.count };
        }),
      };
    case 'RESET':
      return {
        ...state,
        counters: state.counters.map((element) => {
          if (action.payload === element.id) {
            return { id: element.id, count: 0 };
          }
          return { id: element.id, count: element.count };
        }),
      };
    case 'DELETE_COUNTER':
      return {
        ...state,
        counters: state.counters.filter((element) => {
          if (action.payload === element.id) {
            return false;
          }
          return true;
        }),
      };
    case 'ADD_COUNTER': {
      let highestId = 0;

      state.counters.map((element) => {
        if (element.id > highestId) {
          highestId = element.id;
        }
      });

      return {
        ...state,
        counters: [
          ...state.counters,
          { id: highestId + 1, count: 1 },
        ],
      };
    }
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
