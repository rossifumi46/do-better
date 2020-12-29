import './Footer.css';

function Footer(props) {
  return (
    <div className="Footer">
      <div className="footer__links">
        <a href="/#" className="footer__link">Ответы на вопросы</a>
        <a href="/#" className="footer__link">Техническая поддержка</a>
        <a href="/#" className="footer__link">Обработка персональных данных</a>
      </div>
      <p className="footer__text">© 2001-2025, Официальный сайт поддержки и развития гражданских инициатив Российской Федарации</p>
    </div>
  )
}

export default Footer;