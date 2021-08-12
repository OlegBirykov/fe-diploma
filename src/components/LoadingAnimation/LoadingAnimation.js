import { useContext } from 'react';
import './LoadingAnimation.css';
import AppContext from 'AppContext';

function LoadingAnimation() {
  const { loading } = useContext(AppContext);
 
  return (
    <div className="loading-animation">
      <p className="loading-animation__text">{loading.text}</p>
    </div>
  )
}

export default LoadingAnimation;