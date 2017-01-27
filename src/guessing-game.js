class GuessingGame {
    constructor() {}

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	let middle = Math.ceil((this.min + this.max) / 2);
    	return middle;
    }

    lower() {
    	this.max = Math.ceil((this.min + this.max) / 2);
    }

    greater() {
    	this.min = Math.ceil((this.min + this.max) / 2);
    }
}

module.exports = GuessingGame;
