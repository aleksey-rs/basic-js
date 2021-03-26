const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(!sampleActivity) return false;  
  if(typeof sampleActivity !== "string") return false; 
  if(!isFinite(sampleActivity)) return false;
  if(Number(sampleActivity) <= 0) return false;
  if(sampleActivity > 15) return false;
 return  Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity))/((0.693/HALF_LIFE_PERIOD))) ;
};
