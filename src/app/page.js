export default function Home() {
  let todos = ['todo1','tpp2']
  return (
    <div className="container mx-auto h-screen w-2/3">
      <nav className="flex justify-around p-3">
        <div className="text-xl">Texting Context API In Next.js</div>
        <div>Todo:</div>
      </nav>
      <main className="m-6">
        <div className="flex justify-center space-x-3">
          <input type="text" className="text-black text-center rounded " />
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Add
          </button>
        </div>
        <div className="text-center m-9">
          {todos.map((object, i) => (
            <p key={i}>{object}</p>
          ))}
        </div>
      </main>
      <footer className="flex justify-around ">
        <div>footer component</div>
        <div>Todos:</div>
      </footer>
    </div>
  );
}
