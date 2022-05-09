import React, { useState } from 'react'
import Row from '../Row/Row'


const Grid = (props) => {
  const MAX_GUESSES = 6

  // // console.log('cl:',props.rows[0])
  // const [grid, setGrid] = useState(props.rows)

  // const gridItems = grid.map((row, index) =>
  //     // <li key={row.toString()}>
  //     // <React.Fragment key={row.toString()}>
  //     <tbody key={index}>
  //       {row}
  //     </tbody>
  // )

  // // console.log('rows: ', props.rows)

  

  return (
    // <table className='grid-container' key={gridItems.id}>{gridItems}</table>
    <table className='grid-container'>
      {[...Array(MAX_GUESSES)].map((x, i) =>
        <tbody key={i}>
          <Row />
        </tbody>
      )}
    </table>
  )
}

export default Grid