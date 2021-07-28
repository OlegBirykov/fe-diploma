// import { useState } from 'react';
import './Footer.css';

function Footer() {  
  return (
    <footer className="footer"> 
      <div className="footer__full"> 
        <div className="footer__contacts">
          <h3>
            Свяжитесь с нами
          </h3> 
        </div>
        <div className="footer__form">
          <h3>
            Подписка
          </h3>
        </div>
        <div className="footer__subscribe">
          <h3>
            Подписывайтесь на нас
          </h3>
        </div>
      </div>
      <div className="footer__reduced">
        <p className="footer__logo"> 
          Лого
        </p>
        <p className="footer__copyright">
          2018 Web
        </p>
      </div>
    </footer>
  )
}

export default Footer;