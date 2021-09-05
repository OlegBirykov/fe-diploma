import { useState } from 'react';
import './Footer.css';
import Contacts from './Contacts/Contacts';
import SubscriptionForm from './SubscriptionForm/SubscriptionForm';
import SocialMedia from './SocialMedia/SocialMedia';

function Footer() { 
  const [collapsed, setCollapsed] = useState(false);

  const collapseFooter = () => {
    setCollapsed(!collapsed);
  }

  const buttonClassName = 'footer__button-collapse' + (collapsed ? ' footer__button-collapse_collapsed' : '');
  
  return (
    <footer className="footer"> 
      <a className="footer__anchor" href="." name="footer">
        anchor
      </a>
      {!collapsed && 
        <div className="footer__full"> 
          <Contacts />
          <div className="footer__subscription">
            <SubscriptionForm />
            <SocialMedia />
          </div>
        </div>
      }
      <div className="footer__reduced">
        <p className="footer__logo"> 
          Лого
        </p>
        <button className={buttonClassName} type="button" onClick={collapseFooter}>
          &#x221F;
        </button>
        <p className="footer__copyright">
          2018 Web
        </p>
      </div>
    </footer>
  )
}

export default Footer;