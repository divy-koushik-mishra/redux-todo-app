import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="border flex flex-col items-center justify-center w-full md:w-3/4  p-4 m-4 border-slate-800">
        <h2 className="w-full text-3xl font-semibold text-left">Todo list:</h2>
        <div className="todocards w-full p-4">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <div
                key={todo.id}
                className="todocard w-full md:w-3/4 border-y gap-3 border-gray-500 p-8 text-xl flex flex-col md:flex-row justify-between items-center"
              >
                <h3>{todo.text}</h3>
                <button
                  className="bg-red-600 py-2 px-4 rounded-md hover:bg-red-800"
                  onClick={() => dispatch(removeTodo(todo.id))}
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <h2 className="text-center text-xl text-gray-300">
              No todo added. Add todo
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Todos;
