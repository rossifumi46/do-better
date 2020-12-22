import './Form.css';
import { step, transport, cityCats, buildings } from '../utils/data';
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
  const [isOneTwo, setIsOneTwo] = useState(false);
  const [oneTwoId, setOneTwoId] = useState(null);

  function handleFirst(id) {
    setIsFirst(id === 2 ? false : !isFirst);
    setFirst(id);
    setId(id);
    setIsOneTwo(id === 2 ? !isOneTwo : false);
  }

  function handleOneTwo(id) {
    setIsFirst(!isFirst);
    setOneTwoId(id);
  }

  function handleSecond(id) {
    if (handleOneTwo && oneTwoId > 2) {
      setIsEnd(!isEnd);
      setIsSecond(!isSecond);
      setSecondId(id);
    } else {
      setIsSecond(!isSecond);
      setSecondId(id);
    }
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
        less={isFirst || isOneTwo}
      />
      {isOneTwo &&
        <Step
          data={cityCats}
          onClick={handleOneTwo}
          id={oneTwoId}
          less={isFirst}
        />
      }
      {isFirst && 
        <Step
          data={step.second[first]}
          onClick={handleSecond}
          id={secondId}
          less={isSecond}
        />
      }
      {isSecond && oneTwoId < 3 &&
        <StepItems
          items={isOneTwo ? buildings[oneTwoId] : transport}
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