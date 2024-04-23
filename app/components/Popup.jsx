import React from 'react'

const Popup = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="overlay">
          <div className="popup">
            <button className="close-btn" onClick={onClose}>
              Close
            </button>
            <h1>Copy your code</h1>
          </div>
        </div>
      )}
    </>
  )
}

export default Popup
