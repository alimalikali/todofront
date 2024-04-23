import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../components/Form';
import Todos from '../components/Todos';
import { setUser } from '../store/reducers/usersReducers';

const Home = () => {
  // const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [currentId, setcurrentId] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user) dispatch(setUser(user));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  return (
    <div className="flex lg:flex-row flex-col justify-between h-full px-10 py-[40px]  ">
    <Todos setcurrentId={setcurrentId} />
    <Form currentId={currentId} setcurrentId={setcurrentId} />
  </div>
  )
}

export default Home
