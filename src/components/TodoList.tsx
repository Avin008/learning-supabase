const TodoList = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <h1 className="text-center mt-2 font-normal">
        TASKS
      </h1>
      <ul className="flex w-full flex-col gap-3">
        {[1, 2, 3, 4, 5].map((item) => (
          <li className="border w-full flex items-center px-4 justify-between min-h-[50px]">
            <div>{item}</div>
            <div className="flex gap-5 items-center text-sm">
              <div className="text-xs">STATUS</div>
              <button className="font-medium">EDIT</button>
              <button className="font-medium">
                DELETE
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
