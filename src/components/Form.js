import React, { useEffect, useState } from "react";
import { useAddTodoMutation, useGetTodoQuery, useUpdateTodoMutation } from "../store";

const Form = ({ currentId, setcurrentId }) => {


  console.log(currentId);


  const [newTodo, setNewTodo] = useState("");
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  
  const { isLoading } = useGetTodoQuery(currentId, { skip: !currentId });


  
  useEffect(() => {
    if (!currentId) { 
      setNewTodo(""); 
    } 
  }, [currentId]);

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      updateTodo({ id: currentId, title: newTodo });
      setcurrentId(null);
    } else {
      addTodo({ title: newTodo });
    }
    setNewTodo("");
  };

  return (
    <div className="h-fit flex flex-col space-y-4">
  <form className="py-5 px-5 flex flex-col space-y-4 md:w-[400px] w-auto">
    <div className="flex text-black font-semibold text-3xl">
      <h1>Add new Todo</h1>
    </div>
    <label className="text-xl text-black font-bold">Add Title</label>
    <input
      value={newTodo || ""}
      onChange={handleChange}
      className="ring-2 ring-black h-[40px]"
    />

    <button
      className="bg-[#13ab85] rounded-xl py-3 text-2xl font-bold text-white"
      onClick={handleSubmit}
    >
      {isLoading ? "Loading..." : "Submit"}
      {/* submit */}
    </button>
  </form>
</div>

  );
};

export default Form;
