import './Form.css';
import { step, transport } from '../utils/data';
import Step from './steps/Step';
import { useState } from 'react';
import StepItems from './steps/StepItems';

function Form(props) {
  const [isFirst, setIsFirst] = useState(false);
  const [isSecond, setIsSecond] = useState(false);
  const [first, setFirst] = useState();
  const [clickedId, setId] = useState(null);
  const [secondId, setSecondId] = useState(null);

  function handleFirst(id) {
    setIsFirst(!isFirst);
    setFirst(id);
    setId(id);
  }

  function handleSecond(id) {
    setIsSecond(!isSecond);
    setSecondId(id);
  }

  return (
    <div className="Form">
      <h2 className="main__title">Укажите нам вашу проблему</h2>
      <Step
        data={step.first}
        onClick={handleFirst}
        id={clickedId}
        less={isFirst}
      />
      {isFirst && 
        <Step
          data={step.second}
          chose={first}
          onClick={handleSecond}
          id={secondId}
          less={isSecond}
        />
      }

      {isSecond &&
        <StepItems
          items={transport}
        />
      }
      {/* <div className="nav">
        <button className="next" onClick={handleClick}>Назад</button>
        <button className="next" onClick={handleClick}>Далее</button>
      </div> */}
    </div> 
  )
}

export default Form;