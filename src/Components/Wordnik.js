import { useEffect, useState } from 'react';

const restEndpoint = "http://localhost:8080/apiv1/"

/**
function checkStatus(res) {
  if (res.status >= 200 && res.status < 300) {
    return res
  } else {
    let err = new Error(res.statusText)
    err.response = res
    throw err
  }
}
*/

// getHurdle
const callRestAPI = async () => {
  const res = await fetch(restEndpoint)
  const data = await res.json()
  console.log(data)
  return data
}

const Wordnik = () => {
  const[hurdle, setHurdle] = useState([]) // STRETCH: verify best practice on setting initial state to Object.keys placeholder

  useEffect(() => {
    callRestAPI()
    // .then(checkStatus)
    .then(res => setHurdle(res)) //*
    // .then(res => {console.log('Wordnik random hurdle', hurdle)})
    // .catch(err => {console.error('Wordnik Error:', err)})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // console.log(hurdle)
  
  if(Object.keys(hurdle).length > 0){
    return(
      <div>
        <h3>Hurdle 🚧🏃💨</h3> <br />
        {/* Random Word*/}
        <h4> {hurdle[0].word}</h4>
      </div>
    )
  } else {
    return(
      <div>⚠️ Loading hurdle...</div>
    )
  }
}

export default Wordnik;
