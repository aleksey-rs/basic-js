const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === undefined) {
			this.arr.push('( )');
		} else {
			this.arr.push(`( ${String(value)} )`);
		}
		return this;
  },
  removeLink(position) {
    if (this.arr[position] === undefined || Number.isNaN(position)) {
      this.arr = [];
			throw new Error();
		} else {
			this.arr.splice(position - 1, 1);
		}
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const result = this.arr.join('~~');
    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;
