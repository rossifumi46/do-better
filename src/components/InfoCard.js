function InfoCard(props) {
  return (
    <div className="InfoCard">
      <img src={props.img} alt="" className="info-card__img"/>
      <p className="info-card__text">{props.text}</p>
    </div>
  )
}

export default InfoCard;