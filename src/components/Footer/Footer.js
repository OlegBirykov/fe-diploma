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
  
  return (
    <footer className="footer"> 
      {!collapsed && 
        <div className="footer__full"> 
          <Contacts />
          <SubscriptionForm />
          <SocialMedia />
        </div>
      }
      <div className="footer__reduced">
        <p className="footer__logo"> 
          Лого
        </p>
        <button className="footer__button-collapse" type="button" onClick={collapseFooter}>
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