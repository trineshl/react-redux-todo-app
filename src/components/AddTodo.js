import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

function AddTodo() {

  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const L_addTodo = () => {
    dispatch(addTodo({ todoText: todoText }));
    setTodoText('');
  };

  return (
    <div style={{ margin: '10px' }}>
      <h3>Add TODOs</h3>
      <input type='text' placeholder='Enter todo here' value={todoText} onChange={e => setTodoText(e.currentTarget.value)} />
      <button style={{ marginLeft: '5px' }} onClick={L_addTodo}>Add Todo</button>
    </div>
  );
}

export default AddTodo;