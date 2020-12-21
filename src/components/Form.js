import './Form.css';
import { step, transport } from '../utils/data';
import Step from './steps/Step';
import { useState } from 'react';
import StepItems from './steps/StepItems';
import Address from './Address';

function Form(props) {
  const [isEnd, setIsEnd] = useState(false);
  const [isFirst, setIsFirst] = useState(false);
  const [isSecond, setIsSecond] = useState(false);
  const [first, setFirst] = useState();
  const [clickedId, setId] = useState(null);
  const [secondId, setSecondId] = useState(null);
  const [thirdId, setThirdId] = useState(null);

  function handleFirst(id) {
    setIsFirst(!isFirst);
    setFirst(id);
    setId(id);
  }

  function handleSecond(id) {
    setIsSecond(!isSecond);
    setSecondId(id);
  }

  function handleThird(id) {
    setIsEnd(!isEnd);
    setThirdId(id);
  }

  function handleSubmit() {
    props.onFinish();
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
          onClick={handleThird}
          less={isEnd}
          id={thirdId}
        />
      }
      { isEnd && (
        <>
        <Address/>
        <button className="form__submit" onClick={handleSubmit}>Продолжить</button>
        </>
      )}
    </div> 
  )
}

export default Form;