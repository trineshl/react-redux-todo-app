import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({

  initialState: {
    todos: [
      { id: 123, text: 'Make a coffee.' },
      { id: 124, text: 'Complete code review of ADO Enhancements.' }
    ]
  },
  name: 'todo',
  reducers: {
    addTodo: function (state, action) {

      const reqObj = action.payload;

      state.todos.push({
        id: Math.floor(Math.random() * 1000),
        text: reqObj.todoText
      });
    },

    removeTodo: function (state, action) {

      //getting todo id which needs to remove from list
      const todoId = action.payload;

      state.todos = state.todos.filter((todo) => todo.id !== todoId)
    }
  }
});

export const { addTodo, removeTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;