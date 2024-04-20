import React from 'react'
import logo from '../assets/imports'

const HeaderBox = () => {
  return (
    <div>
      <div class="flex items-center gap-x-10">
        <img src={logo.src} alt="logo" width={150} />
        <div>
          <h1 class="font-handwriting text-5xl">Flexy fox</h1>
          <br />
          <h2 class="text-2xl">CSS flexbox helper app</h2>
        </div>
      </div>
      <div class="border-b border-white "></div>
    </div>
  )
}

export default HeaderBox
