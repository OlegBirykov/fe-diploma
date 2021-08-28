import { useContext } from 'react';
import './Popup.css';
import AppContext from 'AppContext';

function Popup() { 
  const { popup, setPopup, loading } = useContext(AppContext);
  const { visible, buttonText, content, error } = popup;

  const closePopup = () => setPopup({ ...popup, visible: false});
  
  return (visible || loading.state) && (
    <div className="popup">
      {visible && 
        <div className={"popup__window " + (error ? "popup__window_error" : "popup__window_info")}>
          <div className="popup__top">
            <p className="popup__exclamation">
              !
            </p>
          </div>
          <div className="popup__content">
            {content.map((item, i) =>
              <p className="popup__paragraph" key={i}>
                {item}
              </p>
            )}
          </div>
          <div className="popup__bottom">
            <button className="popup__button" type="button" onClick={closePopup}>
              {buttonText}
            </button>
          </div>
        </div>
      }
    </div>
  )
}

export default Popup;