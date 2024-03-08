import { useState } from 'react'
import './App.css'
import MyComponent from './MyComponent'
import MyComponent2 from './MyComponent2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <MyComponent/> */}
     <MyComponent2/>
    </>
  )
}

export default App
