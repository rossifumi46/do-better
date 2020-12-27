import './PopupForm.css';

const PopupWithForm = (props) => {
  console.log(props.poem)
  function toPoem() {
    const str = props.poem.reduce( (prev, current) => {
      console.log(current);
      return current.poem ? prev + current.poem : prev;
    }, '')
    console.log(str);
    return str.split('\n').map(item => {
      return (
        <>
          {item}<br />
        </>
      )
    })
  }

  return (
    <section className='PopupForm'>
      <div className="popup__container">
        <h2 className="popup__form-title">Результат</h2>
        
        <form onSubmit={props.onSubmit} className="popup__form" name={`${props.name}Form`}>
          <input type="text" className="input" style={{marginBottom: '16px'}} placeholder="Имя и Фамилия"/>
          <input type="e-mail" className="input" placeholder="e-mail"/>
          <p className="result">{toPoem()}</p>
          <div className="buttons">
            <button type="submit" onClick={props.onSubmit} className="form__submit" style={{background: "#091e42"}}>Отменить</button>  
            <button type="submit" className="form__submit">Отправить</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;