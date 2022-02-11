import React, { useState } from 'react'

const Row = (props) => {
  const [row, setRow] = useState(props.squares)

  const rowItems = row.map((square, index) => 
    <td key={index}>
      {square}
    </td>
  )
  
  // console.log('squares: ', props.squares)
  return (
    <tr className='row-container'>{rowItems}</tr> 
  )
}

export default Row