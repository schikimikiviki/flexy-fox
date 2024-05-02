import React from 'react'

const Popup = ({ isOpen, onClose, data }) => {
  function stringifyWithoutCircularReferences(obj) {
    const seen = new WeakSet() // Use a WeakSet to keep track of visited objects

    return JSON.stringify(obj, function (key, value) {
      if (typeof value === 'object' && value !== null) {
        // If we've already seen this object, return undefined to break the circular reference
        if (seen.has(value)) {
          return
        }
        // Mark this object as visited
        seen.add(value)
      }
      return value
    })
  }

  return (
    <>
      {isOpen && (
        <div className="overlay">
          <div className="popup">
            <button className="close-btn" onClick={onClose}>
              Close
            </button>
            <h1 style={{ color: 'black' }}>Copy your code</h1>
            <div style={{ color: 'black' }}>
              {stringifyWithoutCircularReferences(data)}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Popup
