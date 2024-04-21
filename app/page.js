'use client'

import HeaderBox from './components/HeaderBox'
import Draggable from './components/Draggable'
import Droppable from './components/Droppable'
import Button from './components/Button'
import { DndContext } from '@dnd-kit/core'
import React, { useState } from 'react'

export default function Home() {
  const [parent, setParent] = useState(null)
  const draggable = <Draggable id="draggable">Go ahead, drag me.</Draggable>

  function handleDragEnd({ over }) {
    setParent(over ? over.id : null)
  }

  return (
    <main className="flex items-center justify-between ">
      <DndContext onDragEnd={handleDragEnd}>
        <div class="w-1/4 border-r-4 h-screen">
          <HeaderBox />
          <div class=" px-10 py-10">
            <h1 class="text-xl">Sketch your site with containers</h1>
            <br />
            <h2 class="text-2xl">
              Drag children to the parent container on the right
            </h2>
            {!parent ? draggable : null}
            <div class="h-40 w-auto"></div>
            <h2 class="text-2xl">
              Finished ? Hit the save button in the top right corner.
            </h2>
          </div>
        </div>

        <Droppable id="droppable">
          {parent === 'droppable' ? draggable : 'Drop here'}
        </Droppable>
        <div>
          <Button></Button>
        </div>
      </DndContext>
    </main>
  )
}
