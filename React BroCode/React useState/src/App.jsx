import { useState } from 'react'
import './App.css'
import MyComponent from './MyComponent'
import Counter from './Counter'

// React hook = Special function that allows functional components
//                         to use React features without writing class components 
//                         (useState, useEffect, useContext, useReducer, and more...)                

// useState() = A React hook that allows the creation of a stateful variable
//                       AND a setter function to update its value in the Virtual DOM.
//                       [name, setName]

function App() {


  return (
    <>
     <MyComponent/>
     
    </>
  )
}

export default App
