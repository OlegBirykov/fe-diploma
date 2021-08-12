import { useContext } from 'react';
import './LoadingAnimation.css';
import AppContext from 'AppContext';
import loadingAnimation from './loading-animation.gif';

function LoadingAnimation() {
  const { loading } = useContext(AppContext);
 
  return (
    <div className="loading-animation">
      <img className="loading-animation__image" src={loadingAnimation} height="780" alt="loading-animation" />
      <p className="loading-animation__text">{loading.text}</p>
    </div>
  )
}

export default LoadingAnimation;