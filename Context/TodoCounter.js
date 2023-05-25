"use client";
import { UseTodo } from "./context.js";

const TodoCounter = () => {
  const { todo } = UseTodo();

  return todo.length;
};
export default TodoCounter;
