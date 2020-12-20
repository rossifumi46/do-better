import './Info.css';
import InfoCard from './InfoCard';
import { info } from '../utils/data';

function Info(props) {
  return (
    <div className="Info">
      <h2 className="info__title">Покажи нам, Гражданин, где будет парк вместо равнин</h2>
      <div className="info__cards">
        {info.map(item => {
          return (
            <InfoCard img={item.img} text={item.text}/>
          )
        })}
      </div>
    </div>
  )
}

export default Info;