import React from 'react'
import TodosDetails from './TodosDetails'
import { useGetAllTodosQuery  } from '../store'
import Count from './Count';

const Todos = ({setcurrentId}) => {

  const {data ,error , isFetching } = useGetAllTodosQuery();


  // console.log('Data:', data);
  let content ;
  if (isFetching) {
    content = <div>fetching</div>
  } else if(error) {
    content = <div>error</div> 
  } else if (Array.isArray(data.body.todos)) {
    content = data.body.todos.map(todo => (
      <TodosDetails key={todo._id} todo={todo} setcurrentId={setcurrentId}></TodosDetails>
    ));
  } else {
    content = <div>No data found</div>;
  }


  return (
    <div className='flex flex-col space-y-5 '>
      <Count/>
      {content}
    </div>
  )
}

export default Todos
