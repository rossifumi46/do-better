import './Route.css';

function Route(props) {
  return (
    <div className="Route">
      <input type="text" className="input" placeholder={props.placeholder}/>
    </div>
  )
}

export default Route;