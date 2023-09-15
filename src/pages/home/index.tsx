import { Toaster } from 'react-hot-toast'
import AddTodo from '../../components/AddTodo'
import ReadTodo from '../../components/ReadTodo'

const Home = () => {
  return (
    <>
      <AddTodo />
      <ReadTodo />
      <Toaster position="bottom-right" />
    </>
  )
}

export default Home
