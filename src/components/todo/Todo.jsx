import { React } from "react";

const todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo"
      key={todo.id}
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p> {todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div className="botoes">
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          completar
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          x
        </button>
      </div>
    </div>
  );
};

export default todo;
