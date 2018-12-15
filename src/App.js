import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    const { counter, increment, decrement } = this.props;
    return (
      <div className="App">
        <button onClick={increment} >Increment</button>
        <button onClick={decrement} >Decrement</button>
        <p>{ counter }</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter.count
});

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
