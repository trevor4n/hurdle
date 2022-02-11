import './App.css';
import Wordnik from './Components/Wordnik';
import Square from './Components/Square/Square';
import Row from './Components/Row/Row';
import { useEffect, useState } from 'react';
import Grid from './Components/Grid/Grid';

// ICEBOX - useRef can allow this var to sit in the default export and persist across renders

let hunch = 'hurdle'

function App() {
  const [flag, setFlag] = useState('')
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
  const [hurdle, setHurdle] = useState([])
  // let regex = /[h]/g

  useEffect(() => {
    /**
    document.addEventListener('keydown', (e) => {  
        e.preventDefault();
        if(hunch.length === 6 && e.code === 'Enter'){
          console.log('winner winner')
        }
    })
    */
    function handleKeyDown(event){
      let k = event.key
      console.log(k)
      switch(k){
        case "Backspace":
          hunch = hunch.slice(0, -1) //FIX!
          break
        default:
          if(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'].indexOf(k) !== -1){
            if(hunch.length < 6){
              hunch += 'k'
              if(hunch.length === 6){
                if(hunch === hurdle){
                  setFlag('success')
                }
              }
            }
          }
          return
      }
      event.preventDefault()
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
        <br/>
        <Wordnik hurdle={hurdle} setHurdle={setHurdle}/> 
      </main>
      <footer>
        {flag === 'success' ? <h2>You've done it! 🏃💨💨💨🚧</h2> : <h2>Keep after it.</h2>}
      </footer>
    </div>
  );
}

export default App;