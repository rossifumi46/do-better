import './StepItems.css';
import Tag from './Tag';

function StepItems(props) {

  function render (isLess) {
    return props.items.map(item => {
      return (
        (item.id === props.id || !isLess) && <Tag
        item={item}
        onClick={props.onClick}
      />
      )
    })
  }

  return (
    <div className="StepItems">
      {render(props.less)}
    </div>
  )
}

export default StepItems;