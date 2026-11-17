import { useEffect } from 'react';

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

const Wordnik = ({hurdle, setHurdle}) => {
  useEffect(() => {
    callRestAPI()
    // .then(res => checkStatus(res))
    .then(res => setHurdle(res))
    // .then(res => {console.log('Wordnik random hurdle', hurdle)})
    .catch(err => {console.error('Wordnik Error:', err)})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  // if(Object.keys(hurdle).length > 0){
  // console.log(Object.keys(hurdle))
  if(hurdle.length > 0){
    // TODO: if the wordnik official api filters are still broken, this may be a good place to iterate over the response and check whether results are proper nouns via a second call to wordnik. this would add value to requesting more than one result in the first place
    return(
      <div>
        {/* Random Word*/}
        <h3>Loaded hurdle ☑️</h3>
        {/* <h3> {hurdle[0].word}</h3> */}
      </div>
    )
  } else {
    return(
      <h3>⚠️ Loading hurdle...</h3>
    )
  }
}

export default Wordnik;