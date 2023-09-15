import { MouseEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addTodo } from '../../features/todo/todoSlice'

const AddTodo = () => {
  // State to store the user todo input
  const [todoInput, setTodoInput] = useState<string>('')

  // Init a dispatch handler to call your reducers
  const dispatch = useDispatch()

  // Add todo func
  const addTodoFunc = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (todoInput === '') return toast.error("Todo can't be empty")

    // Dispatch the add todo action from the reducer
    dispatch(addTodo(todoInput))

    // Reset the input state
    setTodoInput('')
  }

  return (
    <div className="flex justify-center">
      <div className="block w-full mx-8 md:mx-0 md:w-3/4 my-12">
        <label
          htmlFor="first_name"
          className="block mb-2 text-lg font-medium text-gray-900"
        >
          Enter Todo:
        </label>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg p-2.5 w-full"
          placeholder="..."
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />

        <button
          type="button"
          className="block mx-auto my-4 text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-lg px-5 py-2.5 mb-2 w-56"
          onClick={addTodoFunc}
        >
          <FontAwesomeIcon className="text-lg mr-2" icon={faAdd} /> Add
        </button>
      </div>
    </div>
  )
}

export default AddTodo
