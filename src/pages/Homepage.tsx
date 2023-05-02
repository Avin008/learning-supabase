const HomePage = () => {
  return (
    <div className="h-screen flex gap-5 flex-col items-center">
      <div className="border flex gap-1 mt-20 border-black w-96 h-12">
        <input
          className="w-[80%] h-full px-2"
          type="text"
          placeholder="Enter Item Name"
        />
        <button className="w-[20%] text-sm border-l px-1">
          ADD ITEM
        </button>
      </div>
      <div className="w-96 flex flex-col gap-2">
        <h1 className="text-center">TASKS</h1>
        <ul className="flex flex-col gap-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <li className="border flex items-center px-4 justify-between h-10">
              <div>{item}</div>
              <div className="flex gap-5 items-center text-sm">
                <div className="text-xs">STATUS</div>
                <button>EDIT</button>
                <button>DELETE</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
