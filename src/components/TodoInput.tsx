const TodoInput = () => {
  return (
    <div className="border flex gap-1 mt-20 border-black w-full h-12">
      <input
        className="w-[80%] h-full px-2"
        type="text"
        placeholder="Enter Item Name"
      />
      <button className="w-[20%] text-sm font-medium border-l px-1">
        ADD ITEM
      </button>
    </div>
  );
};

export default TodoInput;
