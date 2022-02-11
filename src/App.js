import './App.css';
import Wordnik from './Components/Wordnik';
import Square from './Components/Square/Square';
import Row from './Components/Row/Row';
import { useEffect, useState } from 'react';
import Grid from './Components/Grid/Grid';

function App() {
  let idIndex = 0
  let rows = new Array(6)
  for(let i = 0; i < rows.length; i++){
    let squares = new Array(5);
    for (let j = 0; j < squares.length; j++){
      squares[j] = <Square key={j.toString()} id={idIndex++}/>
    }
    rows[i] = <Row key={i.toString()} squares={squares}/>;
  }
  let grid = <Grid rows={rows}/>;
  
  let inputBuffer = ''

  useEffect(() => {
    /**
    document.addEventListener('keydown', (e) => {  
        e.preventDefault();
        if(inputBuffer.length === 6 && e.code === 'Enter'){
          console.log('winner winner')
        }
    })
    */
    function handleKeyDown(e){
      // console.log(e.keyCode)
      console.log(e.key)
    }
    document.addEventListener('keydown', handleKeyDown)

    return function cleanup(){
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hurdle 🚧🏃💨</h1>
        <p>just a short sprint behind wordle</p>
      </header>
      <main>
        <div className='rendered-grid-container'>{grid}</div>
        {/* <Keypress /> */}
        <br/>
        <Wordnik /> 
      </main>
    </div>
  );
}

export default App;