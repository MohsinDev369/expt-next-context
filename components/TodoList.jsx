'use client'
import { UseTodo } from '../Context/context.js'

import { useState } from "react";
const TodoList = () => {
  const { todo, AddTodo } = UseTodo();
     const [inputValue, setInputValue] = useState("");
    function handleAddButton() {
        AddTodo( inputValue);
        setInputValue('')
        
    }
  return (
    <>
      <div className="flex justify-center gap-4">
        <input
          type="text"
          className="rounded text-center text-black"
          value={inputValue}
          onChange={(event)=>setInputValue(event.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddButton}
        >
          Add
        </button>
      </div>{" "}
      <div className="gap-4 my-12 flex justify-center flex-col items-center">
        {todo.map((t, i) => (
          <p key={i} className="bg-orange-400 px-24 py-2 rounded">
            {t}
          </p>
        ))}
      </div>
    </>
  );
};

export default TodoList;
