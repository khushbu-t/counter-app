import React from 'react'

function Steps({steps, changeSteps}) {
  return (
    <div className="setps-container">
      <h3 className="center"> By what number do you want to change counter value? </h3>
        <input type="number" value={steps} className="input" onChange={(e)=>changeSteps(e)}/>
    </div>
  )
}

export default Steps
