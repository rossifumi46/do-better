import './Card.css';
import { useState } from 'react';

function Card(props) {
  const [isClicked, setClicked] = useState(props.isClicked)
  // const [color, setColor] = useState('');
  
  function handleClick() {
    props.onClick(props.item.id);
    setClicked(!isClicked);
  }

  return (
    <div className="Card" onClick={isClicked ? () => {} : handleClick} style={{backgroundColor: isClicked ? '#EFF2F7' : '#FFF'}}>
      <h3 className="card__title">{props.item.title}</h3>
      { !isClicked && <p className="card__text">{props.item.text}</p>}
      { isClicked && <button onClick={handleClick} className="card__change">Изменить</button>}
    </div>
  )
}

export default Card;