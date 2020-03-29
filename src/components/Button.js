import React from 'react'

function Button({counterOperation, itemDetails, steps}) {

  let {title, type} = itemDetails;

  let btnClass = `counter-btn ${type.toLowerCase()}`;

  let btnTitle = type != 'CLEAR' ? `${title} ${steps}` : title;

  return (
    <button
      type="button"
      className={btnClass}
      onClick={() => counterOperation(type.toUpperCase())}>{btnTitle}</button>
  )
}

export default Button;
