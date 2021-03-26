const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(typeof date == 'undefined'){
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) === "[object Date]") {
    if (isNaN(date.getTime())) { 
      return('Unable to determine the time of year!');
    } else {
        let month = date.getMonth()+1;
        let season;
        switch(month) {
          case 12:
          case 1:
          case 2:
              season = 'winter';
          break;
          case 3:
          case 4:
          case 5:
              season = 'spring';
          break;
          case 6:
          case 7:
          case 8:
              season = 'summer';
          break;
          case 9:
          case 10: 
          case 11:
              season = 'fall';
          break;
      }
      return season;
    }
  } else {
    throw new UserException();
  }
};
