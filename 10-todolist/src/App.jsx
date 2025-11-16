import { useState } from 'react'

function App() {
  const [Todos, setTodos] = useState([])
  const [newTodos, setnewTodos] = useState('')

  const addTodo = () => {
    if (newTodos === '') return
    setTodos([...Todos, newTodos])
    setnewTodos("")
  }
  // Delete todo
  const deleteTodo = (index) => {
    // ek copy banayi todos ki
    let copy = [...Todos]
    // us index wala item hata diya
    copy.splice(index, 1)
    // updated list set kari
    setTodos(copy)
  }

  return (
    <>
      <h1 className='text-center text-5xl'>Todo App</h1>
      <div className='flex gap-5 justify-center mt-7'>
        <input className='border rounded px-3'
          type="text"
          value={newTodos}
          onChange={(e) => setnewTodos(e.target.value)}
          placeholder='Enter any task'
        />
        <button className='border rounded px-5 py-1 cursor-pointer bg-blue-900 text-white' onClick={addTodo}>Add</button>
      </div>
      <ul>
        {Todos.map((todo, index) => (
          <li className='m-auto' key={index}>
            {todo}
            <button className='mx-7 text-white bg-amber-900 border-0 rounded cursor-pointer'
              onClick={() => deleteTodo(index)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
