import './StepItems.css';
import Tag from './Tag';

function StepItems(props) {

  return (
    <div className="StepItems">
      {props.items.map(item => {
        return (
          <Tag
            item={item}
            onClick={props.onClick}
          />
        )
      })}
    </div>
  )
}

export default StepItems;