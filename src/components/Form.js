import './Form.css';
import { step, transport, cityCats, buildings } from '../utils/data';
import Step from './steps/Step';
import { useState } from 'react';
import StepItems from './steps/StepItems';
import Address from './Address';
import image from '../images/check.svg';
import Route from './Route';

function Form(props) {
  const style = {
    backgroundColor: '#F7C580',
    borderRadius: '50%',
    width: '12px',
    height: '12px',
    marginRight: '30px'
  }

  const check = {
    content: `url(${image})`,
    marginTop: '38px'
  }

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
    setId(isFirst ? null : id);
    setIsFirst(id === 2 ? false : !isFirst);
    setFirst(id);
    setIsOneTwo(id === 2 ? !isOneTwo : false);
    setOneTwoId(null);
    setSecondId(null);
    setIsSecond(false);
    setThirdId(null);
    setIsEnd(false);
    props.onPoemChange(step.first[id-1].poem, 0);
  }

  function handleOneTwo(id) {
    setOneTwoId(isFirst ? null : id);
    setIsFirst(!isFirst);
    setSecondId(null);
    setIsSecond(false);
    setThirdId(null);
    setIsEnd(false);
    props.onPoemChange(cityCats[id-1].poem, 1);
  }

  function handleSecond(id) {
    if (handleOneTwo && oneTwoId > 2) {
      setSecondId(isSecond ? null : id);
      setIsEnd(!isEnd);
      setIsSecond(!isSecond);
    } else {
      setSecondId(isSecond ? null : id);
      setIsSecond(!isSecond);
    }
    setThirdId(null);
    setIsEnd(false);
    props.onPoemChange(step.second[first][id-1].poem, 2);
  }

  function handleThird(id) {
    const data = isOneTwo ? buildings[oneTwoId] : transport
    setThirdId(isEnd ? null : id);
    setIsEnd(!isEnd);
    props.onPoemChange(data[id-1].poem, 3);
  }

  function handleSubmit() {
    props.onFinish();
  }

  function switcher() {
    switch(clickedId) {
      case 1:
        return <Address title='Добавить остановку по адресу:' onAddressSubmit={props.onAddressSubmit}/>
      case 2:
        switch(oneTwoId) {
          case 1:
          case 2:
          case 3:
            return <Address/>
          case 4:
            return <Route placeholder="Дорога"/>
          default:
            return ""
        }
      case 3:
        return <Route placeholder="Предложение"/>
      default:
        return ""
    }
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
      {isSecond && oneTwoId < 3 && clickedId !== 3 &&
        <StepItems
          items={isOneTwo ? buildings[oneTwoId] : transport}
          onClick={handleThird}
          less={isEnd}
          id={thirdId}
        />
      }
      { ((isEnd || (clickedId === 2 && oneTwoId > 2 && secondId)) || (clickedId === 3 && secondId)) &&
        <div className="">
          <div className="end">
            <div className="check" style={props.less ? check : style}></div>
            {switcher()}
          </div>
          <button className="form__submit" onClick={handleSubmit}>Продолжить</button>
        </div>
      }
    </div> 
  )
}

export default Form;