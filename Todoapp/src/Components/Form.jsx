import React, { useState } from "react";
import style from "./form.module.css";
const Form = ({ todos, setTodos }) => {
  //const [todo, setTodo] = useState("");
  const [todo,setTodo]=useState({name:"",done:false})

  function submitHandler(e) {
    e.preventDefault();
    setTodos([...todos, todo]);

    setTodo({name:"",done:false});
  }
  return (
    <form className={style.todoform} onSubmit={submitHandler}>
     <div className={style.inputContainer}>
     <input
        className={style.modernInput}
        type="text"
        onChange={(e) => setTodo({name:e.target.value,done:false})}
        value={todo.name}
        placeholder="Enter the Todo..."
      />
      <button className={style.modernButton} type="submit">Add</button>
     </div>
    </form>
  );
};

export default Form;
