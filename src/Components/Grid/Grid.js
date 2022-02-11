import React, { useState } from 'react'

const Grid = (props) => {
  // console.log('cl:',props.rows[0])
  const [grid, setGrid] = useState(props.rows)

  const gridItems = grid.map((row, index) =>
      // <React.Fragment key={row.toString()}>
      <tbody key={index}>
        {row}
      </tbody>
  )
  
  // console.log('rows: ', props.rows)
  return (
    <table className='grid-container' key={gridItems.id}>{gridItems}</table>
  )
}

export default Grid