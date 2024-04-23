import React from 'react'
import { useDroppable } from '@dnd-kit/core'

const Droppable = (props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  })
  const style = {
    opacity: isOver ? 0.5 : 0.8,
    background: 'yellow',
    padding: '20px',
    color: 'black',
    height: '100vh',
    width: '50vw',
  }

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  )
}

export default Droppable
