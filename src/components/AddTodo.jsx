import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setinput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setinput("");
  };
  return (
    <>
      <form
        onSubmit={addTodoHandler}
        className="w-full flex flex-col md:flex-row justify-center"
      >
        <input
          type="text"
          name=""
          id=""
          className="rounded-t md:rounded-l p-5 md:w-1/2 bg-slate-700 outline-none"
          placeholder="Enter todo item"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <input
          type="submit"
          value="Add Todo"
          className="bg-slate-800 rounded-b md:rounded-r cursor-pointer hover:bg-slate-900 p-4"
        />
      </form>
    </>
  );
};

export default AddTodo;
