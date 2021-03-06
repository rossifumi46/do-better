import './StepItems.css';
import Tag from './Tag';
import image from '../../images/check.svg';

function StepItems(props) {

  const style = {
    backgroundColor: '#F7C580',
    borderRadius: '50%',
    width: '12px',
    height: '12px',
    marginRight: '30px',
    marginTop: 0
  }

  const check = {
    content: `url(${image})`,
    marginTop: 0
  }

  function render (isLess) {
    return props.data.map(item => {
      return (
        (item.id === props.id || !isLess) && <Tag
        item={item}
        onClick={props.onClick}
        key={item.id}
      />
      )
    })
  }

  return (
    <div className="StepItems">
      <div className="check" style={props.less ? check : style}></div>
      <div className="items">{render(props.less)}</div>
    </div>
  )
}

export default StepItems;