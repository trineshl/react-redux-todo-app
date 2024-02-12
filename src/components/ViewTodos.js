import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../redux/todoSlice';

function ViewTodos() {

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div style={{ margin: '10px' }}>

      <h3>My TODOs</h3>

      <ol>
        {todos.map(todo => <li key={todo.id}>{todo.text} <button onClick={() => dispatch(removeTodo(todo.id))}>
          Remove</button> </li>)}
      </ol>
    </div>
  );
}

export default ViewTodos;