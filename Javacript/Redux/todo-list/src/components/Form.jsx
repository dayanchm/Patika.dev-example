import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./../redux/todos/todosSlice";
import { nanoid } from "@reduxjs/toolkit";

function Form() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: nanoid(),
        text,
        completed: false,
      })
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}

export default Form;
