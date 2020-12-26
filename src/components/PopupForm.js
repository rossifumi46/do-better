import './PopupForm.css';

const PopupWithForm = (props) => {

  const result = "Нивы сжаты, рощи голы,\nОт воды туман и сырость.\nКолесом за сини горы\nСолнце тихое скатилось.\nДремлет взрытая дорога.\nЕй сегодня примечталось,\nЧто совсем-совсем немного\nЖдать зимы седой осталось.\nАх, и сам я в чаще звонкой\nУвидал вчера в тумане:\nРыжий месяц жеребенком\nЗапрягался в наши сани.";
  return (
    <section className='PopupForm'>
      <div className="popup__container">
        <h2 className="popup__form-title">Результат</h2>
        
        <form onSubmit={props.onSubmit} className="popup__form" name={`${props.name}Form`}>
          <input type="text" className="input" style={{marginBottom: '16px'}} placeholder="Имя и Фамилия"/>
          <input type="e-mail" className="input" placeholder="e-mail"/>
          <p className="result">{result}</p>
          <div className="buttons">
            <button type="submit" onCLick={props.onSubmit} className="form__submit" style={{background: "#091e42"}}>Отменить</button>  
            <button type="submit" className="form__submit">Отправить</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;