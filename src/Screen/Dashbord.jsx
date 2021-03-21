import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Dashbord extends Component {
  state = {
    value: this.props.propsCount.value,
    id: 10,
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getClsssBade()}>{this.formateCount()}</span>

        <button
          onClick={this.handleClickEvent}
          className="btn btn-success btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.delete(this.props.propsCount.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  handleClickEvent = () => {
    this.setState({ value: this.state.value + 1 });
  };
  getClsssBade() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "primary" : "warning";
    return classes;
  }

  formateCount() {
    const count = this.state.value;

    return count === 0 ? "Zero" : count;
  }
}

export default Dashbord;
