import './PopupForm.css';

const PopupWithForm = (props) => {

  const result = "Нивы сжаты, рощи голы,\nОт воды туман и сырость.\nКолесом за сини горы\nСолнце тихое скатилось.\nДремлет взрытая дорога.\nЕй сегодня примечталось,\nЧто совсем-совсем немного\nЖдать зимы седой осталось.\nАх, и сам я в чаще звонкой\nУвидал вчера в тумане:\nРыжий месяц жеребенком\nЗапрягался в наши сани.";
  return (
    <section className='PopupForm'>
      <div className="popup__container">
        <h2 className="popup__form-title">Результат</h2>
        {result}
        <form onSubmit={props.onSubmit} className="popup__form" name={`${props.name}Form`} novalidate>
          <button type="submit" >Отправить</button>  
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;