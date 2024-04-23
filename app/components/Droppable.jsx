import React from 'react'
import { useDroppable } from '@dnd-kit/core'

const Droppable = (props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  })
  const style = {
    background: 'var(--yellow)',
    padding: '20px',
    color: 'black',
    width: '100%',
    height: '100%',
  }

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  )
}

export default Droppable
