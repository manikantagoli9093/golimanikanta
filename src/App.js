import './App.css';
import ContactForm from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Home/>
        {/* <Navbar/>
        <ContactForm/> */}
      </header>
    </div>
  );
}

export default App;
