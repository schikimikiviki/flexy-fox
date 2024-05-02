'use client'
import HeaderBox from './components/HeaderBox'
import Popup from './components/Popup'
import React, { useState, useEffect, useRef } from 'react'
import SetWidth from './components/SetWidth'
import ChildBox from './components/ChildBox'

export default function Home() {
  const [isPopupOpen, setPopupOpen] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState(0)
  const inputRef = useRef(null)
  const [initialWidth, setInitialWidth] = useState([])
  const [pageWidth, setPageWidth] = useState(0) // backend setting invisible to users

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen)
  }

  const handleChange = (event) => {
    setSelectedNumber(parseInt(event.target.value))
  }

  useEffect(() => {
    // create divs and put them into the page container
    if (inputRef.current) {
      let pageMaxWidth = inputRef.current.clientWidth
      setPageWidth(pageMaxWidth)

      if (selectedNumber > 0) {
        let widthSingleElement = pageMaxWidth / selectedNumber

        const initialWidthArray = Array.from({ length: selectedNumber }).fill(
          widthSingleElement
        )

        console.log('initial width set to: ', initialWidthArray)

        setInitialWidth(initialWidthArray)
      }
    }
  }, [selectedNumber])

  const updateWidths = (value) => {
    //calculate percentages

    let newWidthArray = []

    for (let i in value) {
      console.log(i)
      let actualWidth = (pageWidth * value[i]) / 100
      newWidthArray.push(actualWidth)
    }

    setInitialWidth(newWidthArray)
  }

  return (
    <div className="main-container">
      <div
        className="choose-container flex-item "
        style={{ height: '100vh', overflow: 'auto' }}
      >
        <HeaderBox />
        <div>
          <h1>Sketch your site with containers</h1>
          <br />
          <h2 style={{ color: 'var(--orange-bright)' }}>
            How many child containers do you need within the first row ?
          </h2>
          <label htmlFor="numberSelect">Select a number:</label>
          <select
            id="numberSelect"
            value={selectedNumber}
            style={{ marginLeft: '10px' }}
            onChange={handleChange}
          >
            {[...Array(10).keys()].map((number) => (
              <option key={number + 1} value={number + 1}>
                {number + 1}
              </option>
            ))}
          </select>

          {selectedNumber > 0 ? (
            <SetWidth
              selectedNumber={selectedNumber}
              sendToParent={updateWidths}
            />
          ) : null}

          <h2 style={{ color: 'var(--orange-bright)' }}>
            Finished ? Hit the save button in the top right corner.
          </h2>
        </div>
      </div>

      <div className="flex-item page-area">
        <div>
          <h2>The white area represents your page</h2>
          <div
            ref={inputRef}
            style={{
              height: '900px',
              width: '700px',
              border: '1px solid black',
              backgroundColor: 'white',
              zIndex: 0,
              display: 'flex',
              position: 'relative',
            }}
          >
            <ChildBox width={initialWidth} count={selectedNumber} />
          </div>
        </div>
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
