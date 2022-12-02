import { FaTrash, FaCheck } from "react-icons/fa";

const Todo = ({ text, todo, todos, setTodos }) => {
  // Completed task button
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  // Delete task button
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  return (
    <div className="todo m-2 bg-white text-2xl text-black flex justify-between items-center">
      <li
        className={`px-0 py-2 flex-1 ${
          todo.completed ? "line-through opacity-30" : ""
        }`}>
        {text}
      </li>
      <button
        onClick={completeHandler}
        className="border-none p-4 cursor-pointer text-base bg-emerald-400 hover:bg-emerald-300">
        <FaCheck color="white" />
      </button>
      <button
        onClick={deleteHandler}
        className="border-none p-4 cursor-pointer text-base bg-red-500 hover:bg-red-400">
        <FaTrash color="white" />
      </button>
    </div>
  );
};

export default Todo;
