import './Main.css';
import Form from './Form';
import Info from './Info';

function Main(props) {
  return (
    <div className="Main">
      <Form 
        onFinish={props.onFinish}
        onPoemChange={props.onPoemChange}
        onAddressSubmit={props.onAddressSubmit}
        onFirst={props.onFirst}
        onOneTwo={props.onOneTwo}
        onSecond={props.onSecond}
        onThird={props.onThird} 
        state={props.state}
      />
      <Info/>
    </div>
  )
}

export default Main;