import { configureStore } from '@reduxjs/toolkit'

import { todoReducer } from './todoSlice';

export const reduxAppStore = configureStore({ reducer: todoReducer })
// The store now has redux-thunk added and the Redux DevTools Extension is turned on