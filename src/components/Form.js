import './Form.css';
import { step, transport, cityCats, buildings } from '../utils/data';
import Step from './steps/Step';
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

  function handleSubmit() {
    if (!oneTwo.isOneTwo) props.onPoemChange(null, 1);
    if (!third.isEnd) props.onPoemChange(null, 3);
    props.onFinish();
  }

  function switcher() {
    switch(first.firstId) {
      case 1:
        return <Address title='Добавить остановку по адресу:' onAddressSubmit={props.onAddressSubmit}/>
      case 2:
        switch(oneTwo.oneTwoId) {
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

  const {first, oneTwo, second, third} = props.state;

  return (
    <div className="Form">
      <h2 className="main__title">Укажите нам вашу проблему</h2>
      <Step
        data={step.first}
        onClick={props.onFirst}
        id={first.firstId}
        less={first.isFirst || oneTwo.isOneTwo}
      />
      {oneTwo.isOneTwo &&
        <Step
          data={cityCats}
          onClick={props.onOneTwo}
          id={oneTwo.oneTwoId}
          less={first.isFirst}
        />
      }
      {first.isFirst && 
        <Step
          data={step.second[first.firstId]}
          onClick={props.onSecond}
          id={second.secondId}
          less={second.isSecond}
        />
      }
      {second.isSecond && oneTwo.oneTwoId < 3 && first.firstId !== 3 &&
        <StepItems
          data={oneTwo.isOneTwo ? buildings[oneTwo.oneTwoId] : transport}
          onClick={props.onThird}
          id={third.thirdId}
          less={third.isEnd}
        />
      }
      { ((third.isEnd || (first.firstId === 2 && oneTwo.oneTwoId > 2 && second.secondId)) || (first.firstId === 3 && second.secondId)) &&
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