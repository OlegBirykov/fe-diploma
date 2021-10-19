import { useContext } from 'react';
import './LastRoutes.css';
import AppContext from 'AppContext';
import LastRoutesItem from './LastRoutesItem/LastRoutesItem';
import shortid from 'shortid';

function LastRoutes() {
  const { trainsInfo } = useContext(AppContext);

  return (
    <div className="last-routes"> 
      <h3 className="last-routes__title">
        Последние билеты
      </h3>
      <div className="last-routes__list">
        {trainsInfo.lastRoutes.map((item) => <LastRoutesItem route={item} key={shortid.generate()} />)}
      </div>
    </div>    
  )
}

export default LastRoutes;