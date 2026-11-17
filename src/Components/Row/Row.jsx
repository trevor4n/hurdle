import React, { useState } from 'react'
import Square from '../Square/Square'


const Row = (props) => {
  const MAX_WORD_LENGTH = 5
  
  // const [row, setRow] = useState(props.squares)

  // const rowItems = row.map((square, index) => 
  //   <td key={index}>
  //     {square}
  //   </td>
  // )
  
  // console.log('squares: ', props.squares)
  return (
    // <tr className='row-container'>{rowItems}</tr> 
    <tr className='row-container'>
      {[...Array(MAX_WORD_LENGTH)].map((x, i) =>
        <td key={i}>
          <Square />
        </td>
      )}
    </tr>
  )
}

export default Row