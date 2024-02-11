
import './App.css'
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';

function App() {

  return (
    <>
    <div className="App">
      <Header />
      <p>Website made using react </p>
      <hr />
      <h3>List of food items</h3>
      <Food />
    </div>
    <Footer />
    </>
  )
}

export default App
