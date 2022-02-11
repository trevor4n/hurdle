import logo from './logo.svg';
import './App.css';
import Wordnik from './Components/Wordnik';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Wordnik */}
        <Wordnik />
      </header>
      <main>
        
      </main>
    </div>
  );
}

export default App;
