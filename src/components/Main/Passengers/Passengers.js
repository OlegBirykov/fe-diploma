import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Passengers.css';
import AppContext from 'AppContext';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import TravelDetails from './TravelDetails/TravelDetails';
import EditPassenger from './EditPassenger/EditPassenger';
import AddPassenger from './AddPassenger/AddPassenger';
import shortid from 'shortid';

function Passengers() {
  const [detailsCollapsed, setDetailsCollapsed] = useState({
    forward: false,
    backward: false,
    passengers: false
  });

  const initPassenger = {
    isCollapsed: false,
    isReady: false
  }

  const [passengerList, setPassengerList] = useState([initPassenger]);
  
  const { setBookingStage, orderInfo } = useContext(AppContext);

  useEffect(() => {
    setBookingStage('passengers');
  }, [setBookingStage]);

  useEffect(() => {
    setDetailsCollapsed(orderInfo.detailsCollapsed ? orderInfo.detailsCollapsed : {
      forward: false,
      backward: false,
      passengers: false
    });
  }, [orderInfo.detailsCollapsed]);

  const addPassenger = () => {
    setPassengerList([...passengerList, initPassenger]);
  }

  const editPassenger = (index, passenger) => {
    console.log(index, passenger);
  }

  const deletePassenger = (index) => {
    console.log(index);
  }

  return (
    <main className="passengers"> 
      <ProgressIndicator stepNumber={2} />
      <div className="passengers__main">
        <section className="passengers__left">
          <TravelDetails collapsed={detailsCollapsed} setCollapsed={setDetailsCollapsed} />
        </section>
        <section className="passengers__right">
          <p className="development-label">
            Страница находится в процессе разработки
          </p>
          {passengerList.map((item, i) => 
            <div className="passengers__edit-passenger" key={shortid.generate()}>
              <EditPassenger 
                passenger={item} 
                number={i + 1}
                edit={(passenger) => editPassenger(i, passenger)} 
                del={() => deletePassenger(i)} 
              />
            </div>
          )}
          {orderInfo.preliminaryList.forward.length > passengerList.length &&
            <div className="passengers__add-passenger">
              <AddPassenger add={addPassenger}/>
            </div>
          }   
          <Link to={process.env.PUBLIC_URL + '/run/payment'} className="passengers__button passengers__button_active"> 
            Далее
          </Link>
        </section>
      </div>
    </main>
  )
}

export default Passengers;