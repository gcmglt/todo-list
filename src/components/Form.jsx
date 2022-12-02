import { FaPlusSquare } from "react-icons/fa";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  // Form functions
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 10000 },
    ]);
    setInputText("");
  };

  // All, Completed, Uncompleted tasks status
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form className="flex justify-center items-center">
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        placeholder="Insert here your task..."
        className="mr-0 todo-input p-2 text-3xl border-none text-black bg-white rounded-l-lg"
      />
      <button
        onClick={submitTodoHandler}
        className="add-todo p-2 text-4xl border-none bg-white cursor-pointer hover:bg-orange-200 mx-2 rounded-r-lg ml-0">
        <FaPlusSquare color="rgb(251, 146, 60)" />
      </button>
      <div className="m-4 relative overflow-hidden">
        <select
          onChange={statusHandler}
          name="todos"
          className="filter-todo p-4 rounded-lg appearance-none	outline-none shadow-none border-0 bg-none text-orange-400 cursor-pointer w-48">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
