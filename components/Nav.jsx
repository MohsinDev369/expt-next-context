import TodoCounter from "../Context/TodoCounter.js";

function Nav() {
  return (
    <nav className="flex justify-around p-4 bg-orange-900">
      <h1>ContextAPI Todo</h1>
      <div className="flex">
        Todos:
        <TodoCounter />
      </div>
    </nav>
  );
}

export default Nav;
