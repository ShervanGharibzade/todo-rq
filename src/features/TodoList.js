import { useQuery, useMutation, useQueryClient } from "react-query";
import { getApi, addTodo, updateTodo, deleteTodo } from "../api";
import LandText from "../components/LandText";
import { useState } from "react";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");

  const queryClinet = useQueryClient();

  const {
    isLoading,
    isError,
    error,
    data: todos,
  } = useQuery("todos", getApi, {
    //for see newtodo first
    select: (data) => data.sort((a, b) => b.id - a.id),
  });

  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClinet.invalidateQueries("todos");
    },
  });

  const updateTodoMutation = useMutation(updateTodo, {
    onSuccess: () => {
      queryClinet.invalidateQueries("todos");
    },
  });

  const deletTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClinet.invalidateQueries("todos");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoMutation.mutate({ userId: 1, title: newTodo, completed: false });

    setNewTodo("");
  };

  const NewItems = (
    <form onSubmit={handleSubmit} className="grid gap-4 p-4 rounded-md">
      <label className="text-center text-xl">Enter a new todo</label>
      <input
        className="text-black text-center w-1/2 mx-auto rounded-md p-2"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter new todo"
      />
      <button className="border-2 w-1/3 mx-auto border-slate-700 py-3 rounded-md hover:bg-white/30 transition-all duration-500">
        Submit
      </button>
    </form>
  );

  const todoOrdered = todos?.map((todo, index) => (
    <div
      key={todo.id}
      className="mx-auto flex gap-5 w-full my-4 rounded-md p-3 bg-slate-500/50 relative hover:bg-gradient-to-r hover:from-white/10">
      <h3 className="text-slate-200 flex-1 text-base">
        {index + 1}.{` `}
        {todo.title}z
      </h3>
      <div className="relative">
        <input
          type="checkbox"
          onChange={() =>
            updateTodoMutation.mutate({ ...todo, completed: !todo.completed })
          }
          checked={todo.completed}
          id={todo.id}
          className="opacity-0"
        />
        <span
          onClick={() =>
            updateTodoMutation.mutate({ ...todo, completed: !todo.completed })
          }
          className="checkmark w-6 h-6 border-2 border-white/50 transition-all
          duration-100 hover:border-4 absolute text-center top-1 active:w-6 active:h-6  cursor-pointer rounded-full text-2xl right-0"></span>
      </div>
      <button
        className="rotate-45 duration-200 hover:text-red-500 relative hover:scale-[1.6] scale-[2] rounded-full text-end"
        onClick={() => {
          deletTodoMutation.mutate({ id: todo.id });
        }}>
        +
      </button>
    </div>
  ));

  let content;
  if (isLoading) {
    return <p>...Loading</p>;
  } else if (isError) {
    return <p>{error.message}</p>;
  } else {
    content = todoOrdered;
  }

  return (
    <section className="text-white py-2 bg-gradient-to-tr from-slate-900 via-emerald-900/50 to-slate-900 bg-slate-900 flex">
      <div className="pt-4 scrollbar h-[97.6vh] px-6 mx-auto overflow-y-auto">
        <h2 className="text-center mb-8 mt-4 text-4xl">TodoList</h2>
        {NewItems}
        <div className="transition-all duration-500">{content}</div>
      </div>
      <LandText />
    </section>
  );
};

export default TodoList;
