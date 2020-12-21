import Card from '../Card';

function Step(props) {

  const isDepend = props.chose;
  const arr = isDepend ? props.data[props.chose]: props.data;
  function render (isLess) {
    return arr.map(item => {
      return (
        (item.id === props.id || !isLess) && <Card
          item={item}
          onClick={props.onClick}
          isClicked={item.id === props.id}
        />
      )
    })
  } 
  
  return (
    
    <div className="Step">
      {render(props.less)}
    </div>
  )
}

export default Step;