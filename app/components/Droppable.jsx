import React from 'react'
import { useDroppable } from '@dnd-kit/core'

const Droppable = (props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  })
  const style = {
    opacity: isOver ? 1 : 0.5,
    background: 'yellow',
    width: '500px',
    height: '500px',
    margin: '50px',
    color: 'black',
    padding: '30px',
  }

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  )
}

export default Droppable
