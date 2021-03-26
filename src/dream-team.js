const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let result = [];
    if(Array.isArray(members)){
        members.forEach(element => {
            if(typeof element == "string"){
                const el = element.trim();
                result.push(el[0].toUpperCase());
            }
        });
    }
    return result.sort().join("");
};
