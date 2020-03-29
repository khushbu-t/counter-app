import React, {useState, useEffect} from 'react'
import Display from './Display';
import Button from './Button';
import Steps from './Steps';

// value validation
function isNotNullOrEmpty(value) {
  if (value !== undefined && value !== null && value !== "") 
    return true;
  return false;
}

function Counter() {

  const [counter,
    setCounter] = useState(0);

  // number by which counter will be increased or decreased
  const [steps,
    setSteps] = useState(1);

  //   button array
  const [operationTypes] = useState([
    {
      id: 1,
      type: 'ADD',
      title : '+'
    }, {
      id: 2,
      type: 'SUBTRACT',
      title : '-'
    }, {
      id: 3,
      type: 'CLEAR',
      title : 'Clear'
    }
  ]);

  //   fetch last counter value from local storage
  useEffect(() => {
    let counterValue = localStorage.getItem('counterValue');

    if (isNotNullOrEmpty(counterValue)) {
      setCounter(counterValue);
    }
  }, []);

  //   performs action based on user input (button press)
  const counterOperation = (actionType) => {

    let isClear = false,
      result = counter,
      operand;

    switch (actionType) {
      case 'ADD':
        operand = '+';
        break;

      case 'SUBTRACT':
        operand = '-';
        break;

      case 'CLEAR':
        isClear = true;
        break;

      default:
        break;
    }

    if (!isClear) {
      result = eval(`${counter}${operand}${steps}`);
    } else {
      result = 0;
    }

    if (isNotNullOrEmpty(result)) {
      // stores values in local storage and state for later use
      localStorage.setItem('counterValue', result);
      setCounter(result);
    }
  }

  const changeSteps = (event) => {

    let value = event.target.value;
    let numberRegex = /^[0-9\b]+$/

    // steps would be saved only if value is valid number
    if (isNotNullOrEmpty(value) && numberRegex.test(value) && value != 0) {
      setSteps(value);
    }
  }

  return (
    <React.Fragment>

      <h2 className="main-title">Counter App</h2>

      {/* disaply couter value */}
      <Display counterValue={counter}/>

      {/* counter buttons ui*/}
      <div className="btn-container">
        {operationTypes.map((item) => {
          let {id} = item;
          return <Button key={id} counterOperation={counterOperation} itemDetails={item} steps={steps}/>
        })}
      </div>

        {/* counter steps ui */}
      <Steps changeSteps={changeSteps} steps={steps}/>

    </React.Fragment>
  )
}

export default Counter;
