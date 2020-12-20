import logo from '../images/logo.png';
import './Header.css';

function Header(props) {
  return (
    <header className="Header">
      <img className="logo" src={logo} alt=""/>
      <button className="header__btn">Версия для слабовидящих</button>
    </header>
  )
}

export default Header;