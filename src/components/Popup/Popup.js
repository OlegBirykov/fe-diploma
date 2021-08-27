import { useContext } from 'react';
import './Popup.css';
import AppContext from 'AppContext';

function Popup() { 
  const { popup } = useContext(AppContext);
  const { visible/*, buttonText, content, error */} = popup;
  
  return visible && (
    <div className="popup">
      <div className="popup__window">
        Всплывающее окно
      </div>
    </div>
  )
}

export default Popup;