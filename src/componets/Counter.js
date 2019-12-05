import React from 'react';
import './Counter.css';
import { connect } from 'react-redux';

class Counter extends React.Component {
 
  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  };

  reset = () => {
    this.props.dispatch({ type: 'RESET' });
  };

  render() {
    const counters = this.props.counters;


    return counters.map(element => {
      return (
        <div className="count">
          <div className="counter">
            <h2>Counter</h2>
          <button onClick={this.decrement}>&ndash;</button>
          <span className="count">{element.count}</span>
          <button onClick={() => this.props.increment(element.id)}>+</button>
          <p>
            <button onClick={this.reset}>RESET</button>
          </p>
          <button onClick={() => this.props.deleteCounter(element.id)}>Delete Counter</button>
          </div>       
        </div>
      );
    });
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
    increment: id => {
        dispatch({type: 'INCREMENT', payload: id})
    },
    dispatch 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
