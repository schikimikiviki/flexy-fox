'use client'

import HeaderBox from './components/HeaderBox'
import Draggable from './components/Draggable'
import Droppable from './components/Droppable'
import { DndContext } from '@dnd-kit/core'
import React, { useState } from 'react'

export default function Home() {
  const [parent, setParent] = useState(null)
  const draggable = <Draggable id="draggable">Go ahead, drag me.</Draggable>

  function handleDragEnd({ over }) {
    setParent(over ? over.id : null)
  }

  return (
    <main className="main-container">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="choose-container flex-item">
          <HeaderBox />
          <div>
            <h1>Sketch your site with containers</h1>
            <br />
            <h2>Drag children to the parent container on the right</h2>
            {!parent ? draggable : null}
            <h2>Finished ? Hit the save button in the top right corner.</h2>
          </div>
        </div>

        <div className="flex-item">
          <Droppable id="droppable" style={{ height: '100vh' }}>
            {parent === 'droppable' ? draggable : 'Drop here'}
          </Droppable>
        </div>

        <div className="flex-item">
          <button className="save-button">Save</button>
        </div>
      </DndContext>
    </main>
  )
}
