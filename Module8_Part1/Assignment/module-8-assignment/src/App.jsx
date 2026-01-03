import { useState } from 'react'
import './App.css'
import GreetingComponent from '/components/GreetingComponent.jsx'
import ToDoList from '../components/List'

function App() {
  const [count, setCount] = useState(0)
  const [todolist, setItems] = useState(["Walk the dog", "Take out the trash", "Clean the car"])

  return (
    <>
      {/* Task3 */}
      <GreetingComponent name="John Doe" />
      {/* Task 4 */}
      <h1>To-do List</h1>
      <ToDoList tasks={todolist} />
    </>
  )
}

export default App
