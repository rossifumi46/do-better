import './Address.css';
import { useState } from 'react';

function Address(props) {
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');

  function handleStreetChange(e) {
    setStreet(e.target.value);
    props.onAddressSubmit('street', e.target.value);
  }

  function handleNumberChange(e) {
    setNumber(e.target.value);
    props.onAddressSubmit('number', e.target.value);
  }

  function handleCityChange(e) {
    setCity(e.target.value);
    props.onAddressSubmit('city', e.target.value);
  }

  return (
    <div className="Address">
      <h3 className="address__title">{props.title}</h3>
      <form>
        <input className="input" type="text" placeholder="Город" value={city} onChange={handleCityChange}/>
        <div className="address__row">
          <input className="input right" type="text" placeholder="Улица" value={street} onChange={handleStreetChange}/>
          <input className="input left" type="text" placeholder="Дом" value={number} onChange={handleNumberChange}/>
        </div>
      </form>
    </div>
  )
}

export default Address;