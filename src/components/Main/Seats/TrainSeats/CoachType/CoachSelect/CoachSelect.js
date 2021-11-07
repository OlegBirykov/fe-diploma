import PropTypes from 'prop-types';
import './CoachSelect.css';
import CoachProperties from './CoachProperties/CoachProperties';
import shortid from 'shortid';

function CoachSelect(props) {
  const { seatsState, setSeatsState } = props;

  const classTypes = ['first', 'second', 'third', 'fourth'];
  const coachArray = seatsState.info
    .filter((item) => item.coach.class_type === classTypes[seatsState.classNumber - 1])
    .sort((a, b) => a.index - b.index);

  const coachClick = (index) => {
    const info = seatsState.info.map((item) => index === item.index ? { ...item, isSelected: !item.isSelected } : item);
    setSeatsState({ ...seatsState, info });
  }

  const checkOption = (coachIndex, optionFlagName) => {
    const info = seatsState.info;
    const index = info.findIndex((item) => item.index === coachIndex);
    info[index][optionFlagName] = !info[index][optionFlagName];
    setSeatsState({ ...seatsState, info });
  }

  const checkSeat = (coachIndex, seatIndex) => {

  }

  return (
    <div className="coach-select">  
      <div className="coach-select__header"> 
        <p className="coach-select__title">
          Вагоны
        </p>
        {coachArray.map((item) =>
          <p className={'coach-select__number' + (item.isSelected ? ' coach-select__number_selected' : '')} key={shortid.generate()} onClick={() => coachClick(item.index)}>
            {item.index > 9 ? item.index : '0' + item.index}
          </p> 
        )}
        <p className="coach-select__numbering">
          Нумерация вагонов начинается с головы поезда
        </p>
      </div>
      {coachArray.filter((item) => item.isSelected).map((item) => 
        <div className="coach-select__coach" key={shortid.generate()}>
          <CoachProperties coach={item} checkOption={checkOption} checkSeat={checkSeat} competitorCount={seatsState.competitorCount}/>
        </div>
      )}
    </div>    
  )
}

CoachSelect.propTypes = {
  seatsState: PropTypes.object.isRequired,
  setSeatsState: PropTypes.func.isRequired
};

export default CoachSelect;