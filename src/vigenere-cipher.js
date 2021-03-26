const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  mode = true
  table = {
    a: "abcdefghijklmnopqrstuvwxyz",
    b: "bcdefghijklmnopqrstuvwxyza",
    c: "cdefghijklmnopqrstuvwxyzab",
    d: "defghijklmnopqrstuvwxyzabc",
    e: "efghijklmnopqrstuvwxyzabcd",
    f: "fghijklmnopqrstuvwxyzabcde",
    g: "ghijklmnopqrstuvwxyzabcdef",
    h: "hijklmnopqrstuvwxyzabcdefg",
    i: "ijklmnopqrstuvwxyzabcdefgh",
    j: "jklmnopqrstuvwxyzabcdefghi",
    k: "klmnopqrstuvwxyzabcdefghij",
    l: "lmnopqrstuvwxyzabcdefghijk",
    m: "mnopqrstuvwxyzabcdefghijkl",
    n: "nopqrstuvwxyzabcdefghijklm",
    o: "opqrstuvwxyzabcdefghijklmn",
    p: "pqrstuvwxyzabcdefghijklmno",
    q: "qrstuvwxyzabcdefghijklmnop",
    r: "rstuvwxyzabcdefghijklmnopq",
    s: "stuvwxyzabcdefghijklmnopqr",
    t: "tuvwxyzabcdefghijklmnopqrs",
    u: "uvwxyzabcdefghijklmnopqrst",
    v: "vwxyzabcdefghijklmnopqrstu",
    w: "wxyzabcdefghijklmnopqrstuv",
    x: "xyzabcdefghijklmnopqrstuvw",
    y: "yzabcdefghijklmnopqrstuvwx",
    z: "zabcdefghijklmnopqrstuvwxy"
  }
  constructor(mode = true) {
    this.mode = mode;
  }
  encrypt(message, key) {
    if(message === undefined || key === undefined){
      throw new Error()
    }else{
      message = message.toLowerCase();
      key = key.toLowerCase();
      let result = "";
      let count = 0;
  
      for( let i = 0; i < message.length; i++ ){
        let keyLetter = (i - count) % key.length;
        let keywordIndex = this.table.a.indexOf(key[keyLetter]);
  
        if( this.table[message[i]] ){
          result += this.table[message[i]][keywordIndex];
        }else{
          result += message[i];
          count++;
        }
      }
      if(this.mode === false){
        return result.split("").reverse().join("").toUpperCase();
      }
      return result.toUpperCase();
    }
  }    
  decrypt(encryptedMessage, key) {
    if(encryptedMessage === undefined || key === undefined){
      throw new Error()
    }else{
      encryptedMessage = encryptedMessage.toLowerCase();
      key = key.toLowerCase();
      let result = "";
      let count = 0;

    for( let i = 0; i < encryptedMessage.length; i++ ){
      let keyLetter = (i - count) % key.length;
      let keyRow = this.table[key[keyLetter]];

      if( keyRow.indexOf(encryptedMessage[i]) !== -1 ){
        result += this.table.a[keyRow.indexOf(encryptedMessage[i])];
      }else{
        result += encryptedMessage[i];
        count++;
      }
    }
    if(this.mode === false){
      return result.split("").reverse().join("").toUpperCase();
    }
    return result.toUpperCase();
    }
  }
}

module.exports = VigenereCipheringMachine;
