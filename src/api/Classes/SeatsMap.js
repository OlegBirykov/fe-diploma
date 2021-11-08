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
        price: this.coach.price,
        width: 26,
        height: 58,
        top: 29,
        paddingTop: 34
      });
    }

    this.seatsMap[0].left = 134;
    this.seatsMap[1].left = 194;
    this.seatsMap[2].left = 223;
    this.seatsMap[3].left = 283;
    this.seatsMap[4].left = 312;
    this.seatsMap[5].left = 373;
    this.seatsMap[6].left = 402;
    this.seatsMap[7].left = 462;
    this.seatsMap[8].left = 491;
    this.seatsMap[9].left = 552;
    this.seatsMap[10].left = 581;
    this.seatsMap[11].left = 641;
    this.seatsMap[12].left = 670;
    this.seatsMap[13].left = 731;
    this.seatsMap[14].left = 760;
    this.seatsMap[15].left = 820;
 
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
        price: i % 2 ? this.coach.top_price : this.coach.bottom_price,
        width: 26,
        height: 29,
        top: i % 2 ? 29 : 58,
        paddingTop: 5
      });
    }

    this.seatsMap[0].left = 133;
    this.seatsMap[1].left = 133;
    this.seatsMap[2].left = 194;
    this.seatsMap[3].left = 194;
    this.seatsMap[4].left = 223;
    this.seatsMap[5].left = 223;
    this.seatsMap[6].left = 283;
    this.seatsMap[7].left = 283;
    this.seatsMap[8].left = 312;
    this.seatsMap[9].left = 312;
    this.seatsMap[10].left = 373;
    this.seatsMap[11].left = 373;
    this.seatsMap[12].left = 402;
    this.seatsMap[13].left = 402;
    this.seatsMap[14].left = 462;
    this.seatsMap[15].left = 462;
    this.seatsMap[16].left = 491;
    this.seatsMap[17].left = 491;
    this.seatsMap[18].left = 552;
    this.seatsMap[19].left = 552;
    this.seatsMap[20].left = 581;
    this.seatsMap[21].left = 581;
    this.seatsMap[22].left = 641;
    this.seatsMap[23].left = 641;
    this.seatsMap[24].left = 670;
    this.seatsMap[25].left = 670;
    this.seatsMap[26].left = 731;
    this.seatsMap[27].left = 731;
    this.seatsMap[28].left = 760;
    this.seatsMap[29].left = 760;
    this.seatsMap[30].left = 820;
    this.seatsMap[31].left = 820;

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
        price: i % 2 ? this.coach.top_price : this.coach.bottom_price,
        width: i > 31 ? 43 : 26,
        height: i > 31 ? 25 : 31,
        top: i > 31 ? 113 : (i % 2 ? 29 : 60),
        paddingTop: i > 31 ? 2 : 5
      });
    }

    this.seatsMap[0].left = 133;
    this.seatsMap[1].left = 133;
    this.seatsMap[2].left = 194;
    this.seatsMap[3].left = 194;
    this.seatsMap[4].left = 223;
    this.seatsMap[5].left = 223;
    this.seatsMap[6].left = 283;
    this.seatsMap[7].left = 283;
    this.seatsMap[8].left = 312;
    this.seatsMap[9].left = 312;
    this.seatsMap[10].left = 373;
    this.seatsMap[11].left = 373;
    this.seatsMap[12].left = 402;
    this.seatsMap[13].left = 402;
    this.seatsMap[14].left = 462;
    this.seatsMap[15].left = 462;
    this.seatsMap[16].left = 491;
    this.seatsMap[17].left = 491;
    this.seatsMap[18].left = 552;
    this.seatsMap[19].left = 552;
    this.seatsMap[20].left = 581;
    this.seatsMap[21].left = 581;
    this.seatsMap[22].left = 641;
    this.seatsMap[23].left = 641;
    this.seatsMap[24].left = 670;
    this.seatsMap[25].left = 670;
    this.seatsMap[26].left = 731;
    this.seatsMap[27].left = 731;
    this.seatsMap[28].left = 760;
    this.seatsMap[29].left = 760;
    this.seatsMap[30].left = 820;
    this.seatsMap[31].left = 820;
    this.seatsMap[32].left = 133;
    this.seatsMap[33].left = 176;
    this.seatsMap[34].left = 223;
    this.seatsMap[35].left = 266;
    this.seatsMap[36].left = 312;
    this.seatsMap[37].left = 355;
    this.seatsMap[38].left = 402;
    this.seatsMap[39].left = 445;
    this.seatsMap[40].left = 491;
    this.seatsMap[41].left = 534;
    this.seatsMap[42].left = 581;
    this.seatsMap[43].left = 624;
    this.seatsMap[44].left = 670;
    this.seatsMap[45].left = 713;
    this.seatsMap[46].left = 760;
    this.seatsMap[47].left = 803;

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
        price: this.coach.bottom_price,
        width: 26,
        height: 20,
        paddingTop: 0
      });

      switch (i + 1) {
        case 2:
        case 4:
        case 6:
        case 8:
        case 10:
        case 12:
        case 14:
        case 16:
        case 18:
        case 20:
        case 22:
        case 24:
        case 26:
        case 28:
        case 30:
        case 32:
          this.seatsMap[i].top = 32;
          break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
        case 11:
        case 13:
        case 15:
        case 17:
        case 19:
        case 21:
        case 23:
        case 25:
        case 27:
        case 29:
        case 31:
          this.seatsMap[i].top = 53;
          break;
        case 34:
        case 36:
        case 38:
        case 40:
        case 42:
        case 44:
        case 46:
        case 48:
        case 50:
        case 52:
        case 54:
        case 56:
        case 58:
        case 60:
          this.seatsMap[i].top = 92;
          break;
        case 33:
        case 35:
        case 37:
        case 39:
        case 41:
        case 43:
        case 45:
        case 47:
        case 49:
        case 51:
        case 53:
        case 55:
        case 57:
        case 59:
        case 61:
        case 62:
          this.seatsMap[i].top = 113;
          break;
        default:
      }

      switch (i + 1) {
        case 2:
        case 1:
        case 33:
          this.seatsMap[i].left = 144;
          break;
        case 4:
        case 3:
        case 34:
        case 35:
          this.seatsMap[i].left = 189;
          break;
        case 6:
        case 5:
        case 36:
        case 37:
          this.seatsMap[i].left = 233;
          break;
        case 8:
        case 7:
        case 38:
        case 39:
          this.seatsMap[i].left = 277;
          break;
        case 10:
        case 9:
        case 40:
        case 41:
          this.seatsMap[i].left = 321;
          break;
        case 12:
        case 11:
        case 42:
        case 43:
          this.seatsMap[i].left = 365;
          break;
        case 14:
        case 13:
        case 44:
        case 45:
          this.seatsMap[i].left = 409;
          break;
        case 16:
        case 15:
        case 46:
        case 47:
          this.seatsMap[i].left = 453;
          break;
        case 18:
        case 17:
        case 48:
        case 49:
          this.seatsMap[i].left = 497;
          break;
        case 20:
        case 19:
        case 50:
        case 51:
          this.seatsMap[i].left = 541;
          break;
        case 22:
        case 21:
        case 52:
        case 53:
          this.seatsMap[i].left = 585;
          break;
        case 24:
        case 23:
        case 54:
        case 55:
          this.seatsMap[i].left = 629;
          break;
        case 26:
        case 25:
        case 56:
        case 57:
          this.seatsMap[i].left = 672;
          break;
        case 28:
        case 27:
        case 58:
        case 59:
          this.seatsMap[i].left = 717;
          break;
        case 30:
        case 29:
        case 60:
        case 61:
          this.seatsMap[i].left = 761;
          break;
        case 32:
        case 31:
        case 62: 
          this.seatsMap[i].left = 805;
          break;
        default:  
      }
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
