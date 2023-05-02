import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const HomePage = () => {
  return (
    <div className="h-screen flex gap-5 flex-col items-center">
      <div className="w-96">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};

export default HomePage;
