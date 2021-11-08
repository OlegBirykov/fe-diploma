export default class SeatsMap {  
  constructor (coach) {
    this.coach = coach.coach;
    this.seats = coach.seats;

    //имитатор номера вагона (номер вагона отсутствует в данных, полученных от сервера)
    this.index = this.coach._id % 15 + 1; 

    switch (this.coach.class_type) {
      case 'first':
        this.classNumber = 1;
        this.createMapType1();
        break;
      case 'second':
        this.classNumber = 2;
        this.createMapType2();
        break;
      case 'third':
        this.classNumber = 3;
        this.createMapType3();
        break;
      default:
        this.classNumber = 4; 
        this.createMapType4();
    }
  }

  createMapType1() {
    this.seatsMap = [];
    for (let i = 0; i < 16; i++) {
      this.seatsMap.push({ 
        available: false, 
        selected: false,
        isTop: false,
        price: this.coach.price
      });
    }
 
    this.seats.forEach((item) => {
      if (item.available && item.index <= 16) {
        this.seatsMap[item.index - 1].available = true;
      }
    });
  }

  createMapType2() {
    this.seatsMap = [];
    for (let i = 0; i < 32; i++) {
      this.seatsMap.push({ 
        available: false, 
        selected: false,
        isTop: i % 2,
        price: i % 2 ? this.coach.top_price : this.coach.bottom_price
      });
    }

    this.seats.forEach((item) => {
      if (item.available && item.index <= 32) {
        this.seatsMap[item.index - 1].available = true;
      }
    });
  }

  createMapType3() {
    this.seatsMap = [];
    for (let i = 0; i < 48; i++) {
      this.seatsMap.push({ 
        available: false, 
        selected: false,
        isTop: i % 2,
        price: i % 2 ? this.coach.top_price : this.coach.bottom_price
      });
    }

    this.seats.forEach((item) => {
      if (item.available && item.index <= 48) {
        this.seatsMap[item.index - 1].available = true;
      }
    });
  }

  createMapType4() {
    this.seatsMap = [];
    for (let i = 0; i < 62; i++) {
      this.seatsMap.push({ 
        available: false, 
        selected: false,
        isTop: false,
        price: this.coach.bottom_price
      });
    }

    this.seats.forEach((item) => {
      if (item.available && item.index <= 62) {
        this.seatsMap[item.index - 1].available = true;
      }
    });
  }

  getAvailableSeatsCount() {
    return this.seatsMap.reduce((count, item) => item.available ? count + 1 : count, 0);
  }

  getTopAvailableSeatsCount() {
    return this.seatsMap.reduce((count, item) => (item.available && item.isTop) ? count + 1 : count, 0);
  }

  getBottomAvailableSeatsCount() {
    return this.seatsMap.reduce((count, item) => (item.available && !item.isTop) ? count + 1 : count, 0);   
  }
}
