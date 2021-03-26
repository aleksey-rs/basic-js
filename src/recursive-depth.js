const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(arr.filter(element => typeof element === 'object').length != 0){
      return 1 + this.calculateDepth([].concat(...arr.filter(i => typeof i === 'object')));
   } else {
      return 1;
   }

}
};