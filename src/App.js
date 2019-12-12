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

const mapDispatchToProps = (dispatch) => ({
    addCounter: () => {
      dispatch({ type: 'ADD_COUNTER' });
    },
  });

export default connect(null, mapDispatchToProps)(App);
