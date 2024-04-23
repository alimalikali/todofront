import React from 'react'
import { useDeleteTodoMutation  } from '../store'


const TodosDetails = ({todo,setcurrentId}) => {
  const [ deleteTodo ] = useDeleteTodoMutation();

  const handledelete = () => {
    deleteTodo(todo._id ); 
  };

    
  return (
    <div className='flex flex-col md:flex-row justify-between w-full md:w-[700px] bg-white px-6 py-3 rounded-2xl'>
    <div className='text-[#13ab85] text-3xl'>
      <h1 className='font-bold'>{todo.title}</h1>
      <p className='text-xl text-gray-500'>{todo.createdAt}</p>
    </div>
    <div className='flex md:space-x-5 mt-4 md:mt-0'>
      <button className='rounded-2xl bg-[#13ab85] text-2xl font-bold text-white py-2 px-3' onClick={() => setcurrentId(todo._id)}>Update</button>
      <button className='rounded-2xl bg-red-400 text-2xl font-bold text-white py-2 px-3' onClick={handledelete}>Delete</button>
    </div>
  </div>
  
  )
}

export default TodosDetails
