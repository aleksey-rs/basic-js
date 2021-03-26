const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result="";
  if(typeof options.separator === "undefined") options.separator ="+";
  if(typeof options.additionSeparator === "undefined") options.additionSeparator ="|";
  if(typeof options.repeatTimes === "undefined"){
    if(options.addition){
      result+= str.toString();
      result+= options.addition.toString();
    }
  }
  for (var i = 0; i < options.repeatTimes; i++) {
    result+= String(str);
    if(String(options.addition) && typeof options.additionRepeatTimes === "undefined") {
      options.additionRepeatTimes = 1;
    }
    if(Number.isInteger(options.additionRepeatTimes)){
      for (var j = 0; j < options.additionRepeatTimes; j++) {
        if(options.addition || String(options.addition) === "false" || String(options.addition) === "null"){
          result+= String(options.addition);
        }
        if(j != options.additionRepeatTimes - 1 ){
          if(options.additionSeparator){
            result+= String(options.additionSeparator);
          }
        }
      }
    }
  
    if(i != options.repeatTimes -1 ){
      if(options.separator){
        result+= String(options.separator);
      }
    }
  }
  return result;
};
  