import './App.css';
import Wordnik from './Components/Wordnik';
import Square from './Components/Square/Square';
import Row from './Components/Row/Row';
import { useEffect, useState } from 'react';
import Grid from './Components/Grid/Grid';
import { cleanup } from '@testing-library/react';

let hunch = '' //stored outside of app to prevent reassignment after every render
// ICEBOX - useRef can allow ^ this var to sit in the default export and persist across renders

function App() {
  const [hurdle, setHurdle] = useState([])
  const [flag, setFlag] = useState('')

  let guess = 0
  let hunchCharOccurrences = {}

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
          if(hunch.length > 0)
            hunch = hunch.slice(0, -1) //FIX!
            setFlag('')
          break
        default:
          if(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'].indexOf(k) !== -1){ //Sanatize the input
            if(hunch.length < 5){
              hunch += k
            }
            if(hunch.length === 5){
              if(hunch === hurdle){
                setFlag('success')
                return
              }
            }
            setFlag('')
          }
          if(k === 'Enter'){
            validateInput()
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

  function validateInput(){
    cleanup()
    let out = []
    for(let i = 0; i < 5; i++){
      // let l = hunch[i]
      let l = grid.rows[guess].squares[i].val

      if(hunchCharOccurrences.hasOwnProperty(l)){
        hunchCharOccurrences[l] += 1
      } else {
        hunchCharOccurrences[l] = 1
      }

      if(!hurdle.includes(l)){
        out[i] = 'f'
      } else if(hurdle[i] === l){
        out[i] = 't'
        // TODO: color the square purple
      } else {
        // if(hunchCharOccurrences <= charFreq(hurdle, l)){
        if(hunchCharOccurrences <= ( (hurdle.match(/l/g) || []).length )){
          out[i] = 'q'
          // TODO: color the square pink
        } // else could be a valid position; however, indication will not be provided
      }
    }

    if(flag === 'success'){
      setFlag('win')
      console.log('win condition: correct letters + correct orientation')
    }
    guess++
  }

  /**
  function charFreq(str, c){
    let chars = {}

    for(let i = 0; i < str.length; i++){
      if(chars.hasOwnProperty(str[i])){
        chars[str[i]] += 1
      } else {
        chars[str[i]] = 1
      }
    }
    return chars[c]
  }
   */

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
        {/* TODO: success state doesn't guarantee the user submitted the word they entered, it just proves the input is correct thus far */}
      </footer>
    </div>
  );
}

export default App;