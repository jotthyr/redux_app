import React from 'react';
import './Counter.css';
import { connect } from 'react-redux';

class Counter extends React.Component {
  render() {
    const { counters } = this.props;

    return counters.map((element) => (
      <div className="count">
        <div className="counter">
          <h2>Counter</h2>
          <button onClick={() => this.props.decrement(element.id)}>&ndash;</button>
          <span className="count">{element.count}</span>
          <button onClick={() => this.props.increment(element.id)}>+</button>
          <p>
            <button onClick={() => this.props.reset(element.id)}>RESET</button>
          </p>
          <button onClick={() => this.props.deleteCounter(element.id)}>Delete Counter</button>
        </div>
      </div>
    ));
  }
}

const mapStateToProps = (state) => ({
  counters: state.counters,
});

const mapDispatchToProps = (dispatch) => ({
  deleteCounter: (id) => {
    dispatch({ type: 'DELETE_COUNTER', payload: id });
  },
  increment: (id) => {
    dispatch({ type: 'INCREMENT', payload: id });
  },
  decrement: (id) => {
    dispatch({ type: 'DECREMENT', payload: id });
  },
  reset: (id) => {
    dispatch({ type: 'RESET', payload: id });
  },
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
