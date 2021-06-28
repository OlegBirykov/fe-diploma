import { useContext } from 'react';
import AppContext from '../../AppContext';

function Popup() { 
  const { popup } = useContext(AppContext);
  const { visible, buttonText, content, error } = popup;
  
  return visible && (
    <div className="Popup"> 
      Всплывающее окно
    </div>
  )
}

export default Popup;