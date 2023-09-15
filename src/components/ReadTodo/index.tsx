import { MouseEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove } from '@fortawesome/free-solid-svg-icons'
import { removeTodo } from '../../features/todo/todoSlice'

// Interfaces
import type { Todo, TodoState } from '../../interfaces/todo'
// Interfaces End

const ReadTodo = () => {
  // Init a dispatch handler to call your reducers
  const dispatch = useDispatch()

  // Get the todos from the store
  const todos = useSelector((state: TodoState) => state.todos)

  // Remove todo func
  const removeTodoFunc = (e: MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault()
    return dispatch(removeTodo(id))
  }

  return (
    <div className="flex justify-center">
      <div className="w-3/4">
        {todos.map((todo: Todo) => (
          <div
            className="flex justify-between items-center mx-auto p-4 mb-4 text-lg text-purple-800 rounded-lg bg-purple-50"
            role="alert"
          >
            <div className="text">{todo.text}</div>

            <button
              className="icon"
              onClick={(e) => removeTodoFunc(e, todo.id)}
            >
              <FontAwesomeIcon
                className="text-2xl mr-2 text-red-500 hover:scale-125"
                icon={faRemove}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReadTodo
