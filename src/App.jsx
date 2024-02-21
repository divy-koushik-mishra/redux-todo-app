import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
const App = () => {
  return (
    <>
      <main className="min-h-screen w-full bg-slate-950 text-white flex items-center flex-col py-20 px-6 md:p-20">
        <AddTodo />
        <Todos />
      </main>
    </>
  );
};

export default App;
