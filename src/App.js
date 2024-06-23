import logo from './logo.svg';
import './App.css';
import './Navbar.js';
import './Card.js';
import Card from './Card.js';
import Navbar from './Navbar.js';


function App() {
  return (
      <div className="App">
          <Navbar></Navbar>
          <h1>CS 230L</h1>
          <h2>Section - 702</h2>
          <p>WVU ID: 800371774</p>
          <p>Hi I am Thomas Stoner</p>
          <Card></Card>
    </div>
  );
}

export default App;
