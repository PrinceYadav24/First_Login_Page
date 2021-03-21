import React, { Component } from "react";
import Dasbord from "./Dashbord";

class Counter extends Component {
  state = {
    Counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 2 },
      { id: 4, value: 1 },
    ],
  };
  render() {
    console.log("Props", this.props);
    return (
      <div>
        <button
          onClick={this.onClickReset}
          className="btn btn-primary btn-sm m"
        >
          Reset
        </button>
        {this.state.Counters.map((count) => (
          <Dasbord
            key={count.id}
            delete={this.onHndleDelete}
            propsCount={count}
          ></Dasbord>
        ))}
      </div>
    );
  }
  onClickReset = () => {};
  onHndleDelete = (counterID) => {
    const Counters = this.state.Counters.filter((a) => a.id !== counterID);
    console.log("Const Counters", Counters);
    this.setState({ Counters });
    console.log("State Counters", Counters);
  };
}

export default Counter;
