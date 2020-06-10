import React, { Component } from "react";
import "../styles.css";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({
      task: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-flex">
          <input
            type="text"
            name="task"
            value={this.state.task}
            onChange={this.handleChanges}
          />
          <button class="add-button">Add</button>
        </div>
      </form>
    );
  }
}

export default TodoForm;
