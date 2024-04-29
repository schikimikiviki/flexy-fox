import React from 'react'

const Draggable = () => {
  const style = {
    background: 'var(--orange)',
    width: '150px',
    height: '150px',
    color: 'black',
  }

  return (
    <div style={style}>
      <h1>Go ahead, drag me</h1>
    </div>
  )
}

export default Draggable
