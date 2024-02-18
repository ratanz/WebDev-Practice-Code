
import './App.css'
import Student from './Students.jsx'

function App() {

  return (
    <>
      <Student name='Aceu' age={23} isStudent={true} />
      <Student name='Rohan' age={33} isStudent={false} />
      <Student name='kiara' age={21} isStudent={false} />
      <Student name='Nayra' age={27} isStudent={false} />
      <Student />
    </>
  )
}

export default App
