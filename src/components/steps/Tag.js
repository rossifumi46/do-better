import './Tag.css';
import { useState } from 'react';

function Tag(props) {
  const [isClicked, setClicked] = useState(props.isClicked)

  function handleClick() {
    props.onClick(props.item.id);
    setClicked(!isClicked);
  }

  const style = {
    backgroundColor: '#EFF2F7',
    width: '400px',
    marginRight: 0
  }

  return (
    <div className="step-items__card" onClick={isClicked ? () => {} : handleClick} style={isClicked ? style : null}>
      <p className="step-items__title">{props.item.title}</p>
      { isClicked && <button onClick={handleClick} className="card__change">Изменить</button>}
    </div>
  )
}

export default Tag;