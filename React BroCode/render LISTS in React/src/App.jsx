
import './App.css'
import List from './List.jsx'

function App() {


  const fruits = [{ id: 1, name: "apple", calories: 95 },
  { id: 2, name: "orange", calories: 45 },
  { id: 3, name: "banana", calories: 105 },
  { id: 4, name: "Coconut", calories: 159 }]

  const vegetables = [{ id: 5, name: "potato", calories: 115 },
  { id: 6, name: "carrots", calories: 145 },
  { id: 7, name: "corn", calories: 156 },
  { id: 8, name: "broccoli", calories: 159 }]

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
    </>
  )
}

export default App
