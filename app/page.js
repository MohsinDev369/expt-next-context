const Home = () => {
  return (
    <>
      <div className="container m-auto w-2/3  mt-12 ">
        <div className="flex justify-center gap-4">
          <input type="text" className="rounded text-center text-black"/>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add
          </button>
        </div>{" "}
        <div className="mt-12 flex justify-center flex-col items-center gap-4">
          <p className="bg-orange-400 px-24 py-2 rounded">Todo1</p>
          <p className="bg-orange-400 px-24 py-2 rounded">Todo2</p>
          <p className="bg-orange-400 px-24 py-2 rounded">Todo3</p>
        </div>
      </div>
    </>
  );
};

export default Home;
