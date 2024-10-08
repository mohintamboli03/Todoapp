import React from "react";
import style from "./todoitem.module.css";
const TodoItem = ({ item, todos, setTodos }) => {
  function handleDelete() {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    
    setTodos(todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      ))
   
    
  }

  const isdone= item.done ? style.completed:"";
  return (
    <div className={style.item}>
      <div className={style.itemName}>
        <span className={isdone} onClick={() => handleClick(item.name)}>{item.name}</span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={style.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={style.line} />
    </div>
  );
};

export default TodoItem;
