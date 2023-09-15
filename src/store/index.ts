import { configureStore } from '@reduxjs/toolkit'

// Import the reducers
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
  reducer: todoReducer, // The reducer comes from the feature/todo
})
