import React from 'react'

const ChildBox = (props) => {
  let width = props.width
  let count = props.count

  return (
    <div style={{ display: 'flex' }}>
      {[...Array(count).keys()].map((number) => (
        <div
          key={number}
          style={{
            backgroundColor: 'var(--pink)',
            boxShadow: '0px 0px 0px 1px black inset',
            width: width[number],
            height: '100px',
          }}
        ></div>
      ))}
    </div>
  )
}

export default ChildBox
