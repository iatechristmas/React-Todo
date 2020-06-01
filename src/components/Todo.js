import React from "react";

const Todo = (props) => {
  return (
    <div
      onClick={() => props.toggleTask(props.task.id)}
      //   className={`item${props.item.completed ? "completed" : ""}`}
    >
      <p>{props.task.task}</p>
    </div>
  );
};

export default Todo;
