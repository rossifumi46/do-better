import './StepItems.css';

function StepItems(props) {
  return (
    <div className="StepItems">
      {props.items.map(item => {
        return (
          <div className="step-items__card">
            <p className="step-items__title">{item.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default StepItems;