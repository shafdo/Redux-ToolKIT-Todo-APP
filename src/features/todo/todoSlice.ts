// The slice is responsible of linking the reducers and initial state of the store
import { createSlice, nanoid } from '@reduxjs/toolkit'

// Interfaces
import type { TodoState } from '../../interfaces/todo'
// Interfaces End

const initialState: TodoState = {
  todos: [],
}

// 1. Create a slice (Feature)
export const todoSlice = createSlice({
  name: 'todo', // Name of the reducer (feature)
  initialState, // Initial state of the slice
  reducers: {
    addTodo: (state, action) => {
      // Add todo. Reducer logoic to add a todo to todos state
      state.todos.push({
        id: nanoid(),
        text: action.payload,
      })
    },
    removeTodo: (state, action) => {
      // Remove todo. Reducer logoic to remove todo from todos state
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  },
})

// 2. Export the reducer actions
export const { addTodo, removeTodo } = todoSlice.actions

// 3. Export the reducer. [This is used by the store]
export default todoSlice.reducer
