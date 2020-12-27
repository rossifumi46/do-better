import './Address.css';

function Address(props) {
  return (
    <div className="Address">
      <h3 className="address__title">{props.title}</h3>
      <form>
      <input className="input" type="text" placeholder="Город"/>
      <div className="address__row">
        <input className="input right" type="text" placeholder="Улица"/>
        <input className="input left" type="text" placeholder="Дом"/>
      </div>
    </form>
    </div>
  )
}

export default Address;