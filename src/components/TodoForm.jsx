import React, { useEffect, useRef, useState, memo } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    let listTodo = {
      id: Math.trunc(Math.random() * 1000),
      text: input,
    };
    props.onSubmit(listTodo);
    setInput("");
  };
  return (
    <form className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleOnSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleOnSubmit} className="todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
};

export default memo(TodoForm);
