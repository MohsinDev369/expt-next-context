"use client";
import React, { useState, createContext, useContext } from "react";
// Create Context AKA Global Store
export const TodoContext = createContext(null);
//Create Provider function that will provide Contaxt
export function TodoProvider({ children }) {
  const [todo, setTodo] = useState(["1", "2", "3"]);
  // Add Todo
  const AddTodo = (inpt) => {
    // if condition that add iff input is not empty
    // if (inpt === "") {
    //     return todo
    // } else {
    //      return setTodo([...todo, inpt]);
    // }
    // in Short if condidion
    inpt === "" ? todo : setTodo([...todo, inpt]);

    console.log("AddTodo in context had run");
  };
  // Delete Todo
  const RemoveTodo = (remEle) => {
    setTodo(todo.filter((todos) => todos !== remEle));

    console.log("Context RemoveTodo Prop:", remEle);
  };
  //Update the State
  const UpdateTodo = (upTodo, inpt) => {
    const indexOfupTodo = todo.indexOf(upTodo);
    todo[indexOfupTodo] = inpt;
    setTodo([...todo]);

    console.log(indexOfupTodo, todo[indexOfupTodo]);
  };
  return (
    <TodoContext.Provider value={{ todo, AddTodo, RemoveTodo, UpdateTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
// Just to simplefy
export const UseTodo = () => {
  return useContext(TodoContext);
};
