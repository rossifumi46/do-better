import Card from '../Card';
import image from '../../images/check.svg';
import './Step.css';

function Step(props) {
  const arr = props.data;

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

  function render (isLess) {
    return arr.map(item => {
      return (
        (item.id === props.id || !isLess) && <Card
          item={item}
          onClick={props.onClick}
          isClicked={item.id === props.id}
          key={item.id}
        />
      )
    })
  } 

  return (
    <div className="step-container">
      <div className="check" style={props.less ? check : style}></div>
      <div className="Step">
        {render(props.less)}
      </div>
    </div>
  )
}

export default Step;