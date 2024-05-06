import React from 'react'
import CodeSnippet from './CodeSnippet'

const Popup = ({ isOpen, onClose, data }) => {
  console.log('Data from Popup: ', data)
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
              <CodeSnippet data={data} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Popup
