'use client'

import HeaderBox from './components/HeaderBox'
import Draggable from './components/Draggable'
import Droppable from './components/Droppable'
import { DndContext } from '@dnd-kit/core'
import Popup from './components/Popup'
import React, { useState } from 'react'
import logo from './assets/imports'

export default function Home() {
  const [isPopupOpen, setPopupOpen] = useState(false)

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen)
  }

  const handleDragStart = (event) => {
    event.dataTransfer.setData('Text', event.target.id)
  }

  const handleDragOver = (event) => {
    event.preventDefault()

    // event.currentTarget.style.backgroundColor = 'pink';
  }

  const handleDrop = (event) => {
    event.preventDefault()
    const data = event.dataTransfer.getData('Text')
    const draggedItem = document.getElementById(data)

    // Calculate the offset relative to the droppable area
    const offsetX =
      event.clientX - event.currentTarget.getBoundingClientRect().left
    const offsetY =
      event.clientY - event.currentTarget.getBoundingClientRect().top

    // Set the position of the dropped item relative to the droppable area
    draggedItem.style.position = 'absolute'
    draggedItem.style.left = offsetX + 'px'
    draggedItem.style.top = offsetY + 'px'

    event.currentTarget.appendChild(draggedItem)
  }
  return (
    <div className="main-container">
      <div className="choose-container flex-item">
        <HeaderBox />
        <div>
          <h1>Sketch your site with containers</h1>
          <br />
          <h2>Drag children to the parent container on the right</h2>
          <div
            id="draggedItem"
            draggable="true"
            onDragStart={handleDragStart}
            style={{
              background: 'var(--orange)',
              width: '150px',
              height: '150px',
              color: 'black',
            }}
          >
            Go ahead, drag me
          </div>
          <div
            id="draggedItem2"
            draggable="true"
            onDragStart={handleDragStart}
            style={{
              background: 'var(--pink)',
              width: '150px',
              height: '200px',
              color: 'black',
            }}
          >
            Go ahead, drag me
          </div>
          {/* <img
            id="draggedItem2"
            src={logo.src}
            alt="Drag and Drop"
            width="50"
            height="50"
            draggable="true"
            onDragStart={handleDragStart}
          /> */}
          <h2>Finished ? Hit the save button in the top right corner.</h2>
        </div>
      </div>

      <div className="flex-item">
        <div
          className="dropzone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          style={{
            height: '700px',
            width: '500px',
            border: '1px solid black',
            backgroundColor: 'white',
            position: 'relative',
          }}
        ></div>
      </div>

      <div className="flex-item">
        <button onClick={togglePopup} className="save-button">
          Save
        </button>
        <Popup isOpen={isPopupOpen} onClose={togglePopup} />
      </div>
    </div>
  )
}
