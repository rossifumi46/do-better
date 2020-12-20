import Card from '../Card';

function Step(props) {

  const isDepend = props.chose;
  const arr = isDepend ? props.data[props.chose]: props.data;
  const render = arr.map(item => {
    return (
      <Card
        item={item}
        onClick={props.onClick}
        isClicked={item.id === props.id}
      />
    )
  })
  const render2 = arr.map(item => {
    return (
      item.id === props.id && <Card
        item={item}
        onClick={props.onClick}
        isClicked={item.id === props.id}
      />
    )
  })
  return (
    
    <div className="Step">
      {props.less ? render2 : render}
    </div>
  )
}

export default Step;