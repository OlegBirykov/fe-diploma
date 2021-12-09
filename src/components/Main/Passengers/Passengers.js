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
  const [passengerList, setPassengerList] = useState([]);
  
  const { setBookingStage, orderInfo, setOrderInfo } = useContext(AppContext);

  useEffect(() => {
    setBookingStage('passengers');
  }, [setBookingStage]);

  useEffect(() => {
    setPassengerList(orderInfo.passengerList ? orderInfo.passengerList : [{}]);
  }, [orderInfo.passengerList]);

  const addPassenger = () => {
    const list = [...passengerList, {
      isCollapsed: false,
      isAdult: true,
      firstName: '',
      lastName: '',
      patronymic: '',
      gender: true,
      birthday: '',
      isDisability: false,
      includeChild: false,
      documentType: 'Паспорт РФ',
      passportSeries: '',
      passportNumber: '',
      birthSertificateNumber: '',
      isChange: false,
      isError: false,
      isReady: false
    }];
    
    const newOrderInfo = { ...orderInfo, passengerList: list };
    setOrderInfo(newOrderInfo);
    localStorage.setItem('orderInfo', JSON.stringify(newOrderInfo));
  }

  return (
    <main className="passengers"> 
      <ProgressIndicator stepNumber={2} />
      <div className="passengers__main">
        <section className="passengers__left">
          <TravelDetails />
        </section>
        <section className="passengers__right">
          <p className="development-label">
            Страница находится в процессе разработки
          </p>
          {passengerList.map((item, i) => 
            <div className="passengers__edit-passenger" key={shortid.generate()}>
              <EditPassenger 
                passenger={item} 
                index={i}
                passengerList={passengerList}
                setPassengerList={setPassengerList} 
              />
            </div>
          )}
          {orderInfo.seatList.forward.length > passengerList.length &&
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