import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Counter from './componets/Counter';

class App extends React.Component {

  render() {
    return (
        <div className="center">
          <button onClick={() => this.props.addCounter()}>Add Counter</button>
          <Counter />
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    counters: state.counters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCounter: id => {
      dispatch({ type: 'DELETE_COUNTER', payload: id });
    },
    addCounter: () => {
      dispatch({ type: 'ADD_COUNTER' });
    },
    dispatch 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
