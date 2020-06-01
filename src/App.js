import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const todo = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo,
    };
  }

  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      todo: [...this.state.todo, newTask],
    });
  };

  removeCompleted = () => {};

  toggleTask = (taskId) => {
    this.setState({
      todo: this.state.todo.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      }),
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <div>
          <h2>Task List</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <div>
          <TodoList toggleTask={this.toggleTask} todo={this.state.todo} />
        </div>
      </div>
    );
  }
}

export default App;
