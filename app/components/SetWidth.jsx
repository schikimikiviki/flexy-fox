import React, { useState, useEffect } from 'react'

const SetWidth = (props) => {
  const [widths, setWidths] = useState([])
  const numberOfSettings = props.selectedNumber

  const handleSubmit = (event) => {
    event.preventDefault()
    // Extracting the values of input fields
    const values = Array.from(event.target.elements)
      .filter((element) => element.type === 'text')
      .map((element) => parseInt(element.value, 10))
    setWidths(values)
  }

  useEffect(() => {
    console.log(widths)
  }, [widths])

  const handleChange = (event) => {
    // You can handle input changes here if needed
  }

  return (
    <form onSubmit={handleSubmit}>
      {[...Array(numberOfSettings).keys()].map((number) => (
        <div key={number + 1}>
          <p>Width for child {number + 1} </p>
          <input
            type="text"
            name={`child${number + 1}`}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  )
}

export default SetWidth
