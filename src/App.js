import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./styles.css";

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
      id: Math.floor(Math.random() * 1500000000000 + 1),
      completed: false,
    };
    this.setState({
      todo: [...this.state.todo, newTask],
    });
  };

  removeCompleted = (e) => {
    this.setState({
      todo: [{}],
    });
  };

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

  render() {
    return (
      <div>
        <div>
          <h2>Task List</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <div>
          <TodoList
            toggleTask={this.toggleTask}
            removeCompleted={this.removeCompleted}
            todo={this.state.todo}
          />
        </div>
      </div>
    );
  }
}

export default App;
