import React from 'react'
import logo from '../assets/imports'

const HeaderBox = () => {
  return (
    <div>
      <div className="header-main">
        <img src={logo.src} alt="logo" width={150} />
        <div>
          <h1 style={{ fontFamily: 'var(--handwriting)' }}>Flexy fox</h1>

          <h2 style={{ marginTop: '-20px' }}>CSS flexbox helper app</h2>
        </div>
      </div>
    </div>
  )
}

export default HeaderBox
