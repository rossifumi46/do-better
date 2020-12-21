import './Tag.css';
import { useState } from 'react';

function Tag(props) {
  const [isClicked, setClicked] = useState(props.isClicked)

  function handleClick() {
    props.onClick(props.item.id);
    setClicked(!isClicked);
  }

  return (
    <div className="step-items__card" onClick={isClicked ? () => {} : handleClick} style={{backgroundColor: isClicked ? '#EFF2F7' : '#FFF'}}>
      <p className="step-items__title">{props.item.title}</p>
      { isClicked && <button onClick={handleClick} className="card__change">Изменить</button>}
    </div>
  )
}

export default Tag;