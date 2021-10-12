import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Trains.css';
import AppContext from 'AppContext';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
/*
const response = await routes(setAnimation, {
  from_city_id: fromCityId,
  to_city_id: toCityId,
  date_start: '2021-04-10',
  date_end: '2021-04-12',
  limit: 30
}); 
if (!response.ok) {
  httpErrorBox(setPopup, response);
  return; 
}  

let routesList;
try {
  routesList = await response.json();
} catch(e) {
  routesList = { total_count: 0 };
}

if (!routesList.total_count) {
  infoBox(setPopup, 'К сожалению, требуемые поезда не найдены. Возможно, стоит изменить дату'); 
  return;     
}

routesList.items.forEach(item => {
  console.log(item);
});;
*/
function Trains() {
  const { setBookingStage } = useContext(AppContext);

  const getTrainsList = async () => {
    console.log('qwerty');
  }

  useEffect(() => {
    setBookingStage('trains');
    getTrainsList();
  }, [setBookingStage]);
  
  return (
    <main className="trains"> 
      <ProgressIndicator stepNumber={1} />
      <Link to={process.env.PUBLIC_URL + '/run/seats'} className="trains__xxx"> 
        Далее
      </Link>
    </main>
  )
}

export default Trains;