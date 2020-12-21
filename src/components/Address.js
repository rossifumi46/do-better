import './Address.css';

function Address(props) {
  return (
    <div className="Address">
      <form action="">
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