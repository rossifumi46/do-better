import './Main.css';
import Form from './Form';
import Info from './Info';

function Main(props) {
  return (
    <div className="Main">
      {/* <Steps/> */}
      <Form onFinish={props.onFinish}/>
      <Info/>
    </div>
  )
}

export default Main;