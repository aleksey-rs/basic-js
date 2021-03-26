const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = [];
  if(!Array.isArray(arr)) throw new UserException();
  let skip = false;
  arr.forEach((element,index, array) => {
    if(skip && array[index+1] != '--double-prev'){
      skip = false;
      return;
    }
    if(array[index+1] == '--double-prev' && skip){
      return;
    }else{
      skip = false;
    }
    
    if(element == "--discard-next" || element == "--discard-prev" || element == "--double-next" || element == "--double-prev"){
      switch(element){
        case "--discard-next": skip = true;
        break;
        case "--discard-prev": if((result.length !=0) && array[index-2] !="--discard-next") result.pop();
        break;
        case "--double-next": if(arr.length != index+1) result.push(array[index+1]);
        break;
        case "--double-prev": if(index != 0 ) result.push(array[index-1]);
        break;
      }
    }else{
      result.push(element);
    }
  });

  return result;
};
