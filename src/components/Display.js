import React from 'react'

function Display({counterValue}) {
  return (
    <div className="counter-container">
      <div className="container-item">
        <h3>{counterValue}</h3>
      </div>
    </div>
  )
}

export default Display
