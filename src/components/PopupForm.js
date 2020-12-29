import './PopupForm.css';
import { useState } from 'react';

const PopupWithForm = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [btnText, setBtnText] = useState('Отправить');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');

  function toString() {
    return props.poem.reduce( (prev, current) => {
      return current.poem ? prev + current.poem : prev;
    }, '');
  }
  
  function toPoem() {
    return toString().split('\n').map(item => {
      return (
        <>
          {item}<br />
        </>
      )
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    setBtnText('Отправка...');
    
    fetch('https://immense-sea-80366.herokuapp.com/addresses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props.address),
    })
      .then(response => response.json())
      .then(data => {
        fetch('https://immense-sea-80366.herokuapp.com/poems', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            fullname: fullName,
            poem_text: toString(),
            address: data.id
          }),
        })
          .then(response => response.json())
          .then(data => {
            setIsActive(true);
            setBtnText('Отправить')
        });
      });
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleFullNameChange(e) {
    setFullName(e.target.value);
  }

  return (
    <section className='PopupForm' style={isActive ? {justifyContent: 'center', alignItems: 'center'} : {}}>
      {!isActive && <div className="popup__container">
        <h2 className="popup__form-title">Результат</h2> 
        <form onSubmit={props.onSubmit} className="popup__form" name={`${props.name}Form`}>
          <input type="text" className="input" style={{marginBottom: '16px'}} placeholder="Имя и Фамилия" onChange={handleFullNameChange}/>
          <input type="e-mail" value={email} className="input" placeholder="e-mail" onChange={handleEmailChange}/>
          <p className="result" style={{textAlign: 'center'}}>{toPoem()}</p>
          <div className="buttons">
            <button onClick={props.onCancel} className="form__submit" style={{background: "#091e42"}}>Отменить</button>  
            <button type="submit" onClick={handleSubmit} className="form__submit">{btnText}</button>
          </div>
        </form>
      </div>}
      {isActive && <div className="popup__container">
        <h2 className="success__title">Спасибо за ваше предложение</h2>
        <h3 className="successs__subtitle">Хотите ли вы предложить что-то еще ?</h3>
        <div className="buttons">
            <button onClick={props.onSubmit} className="form__submit" style={{background: "#36B27E"}}>Хочу !</button>  
            <button onClick={props.onSubmit} className="form__submit" style={{background: "#6B778C"}}>Это все</button>
          </div>
      </div>}
    </section>
  );
}

export default PopupWithForm;