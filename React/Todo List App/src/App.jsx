import { useState, useEffect } from 'react'
import Navbar from "./components/Navbar"
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])


  const saveToLs = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (params) => {
    setShowFinished(!showFinished)
  }


  const handleEdit = (e, id) => {
    // to edit a todo
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)

    // to delete a todo
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLs();

  }

  const handleDelete = (e, id) => {

    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLs();

  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLs();
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLs();
  }



  return (
    <>
      <Navbar />
      <div className=" mx-3 md:container md:mx-auto my-5 w-[80vw] rounded-2xl p-5 bg-pink-200 min-h-[70vh] md:w-[75%]">
        <h1 className='font-bold text-center text-3xl'>iTask - Mange your todos at one place</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className=" text-2xl font-bold">Add a Todo</h2>
          <div className="flex">
          <input onChange={handleChange} value={todo} type="text" className="w-full bg-pink-100 font-bold rounded-full drop-shadow-xl py-2 text-center" />
          <button onClick={handleAdd} disabled={todo.length <=3} className="bg-pink-400 hover:bg-pink-700 disabled:bg-pink-600 p-2 py-1 mx-2 w-[15%] font-bold text-sm text-white rounded-full ">Save</button>
          </div>
        </div>

        <input className=' my-4' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} /> 
        <label className='mx-2' htmlFor="show">Show Finished</label>
        <div><h1 className='h-[1px] bg-gray-700 opacity-30 my-2'></h1></div>
        <h2 className=" text-2xl font-bold my-4">Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'> No Todos to display </div>}
          {todos.map(item => {

            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex my-3 font-bold justify-between">
              <div className='flex gap-5'>
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e) => handleEdit(e, item.id)} className=" bg-pink-400 hover:bg-pink-700 p-1 py-1 font-bold text-sm text-white rounded-md mx-1" ><FaEdit /></button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className="bg-pink-400 hover:bg-pink-700 p-1 py-1 font-bold text-sm text-white rounded-md mx-1"><MdDelete /></button>
              </div>
            </div>
          })}
        </div>

      </div>
    </>
  )
}

export default App
