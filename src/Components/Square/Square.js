import React, { useState } from 'react'

const Square = (props) => {
  const [val, setVal] = useState('')
  const [flag, setFlag] = useState('empty')
  const [id, setId] = useState(props.id)

  // console.log('id: ', props.id)
  return (
    <div className='square-container'>
      <h2>V{val}</h2>
    </div>
  )
}

export default Square