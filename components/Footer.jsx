import TodoCounter from "../Context/TodoCounter.js";
const Footer = () => {
  return (
    <>
      <footer className="flex justify-around items-center bg-slate-900 p-4">
        <h1 className="text-2xl">Footer</h1>
        <p>
          Todos:
          <TodoCounter />
        </p>
      </footer>
    </>
  );
};

export default Footer;
