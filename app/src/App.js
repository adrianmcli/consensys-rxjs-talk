import React from "react";

export default class extends React.Component {
  state = { count: null };

  componentDidMount = async () => {
    
  };

  render() {
    return (
      <>
        <h1>Count: {this.state.count}</h1>
        <button>Increment</button>
      </>
    );
  }
}
