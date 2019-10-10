class GuessingGame {
    constructor() {
        this.min_number = 0;
        this.max_number = 0;
        this.guess_number = 0;
    }

    setRange(min, max) {
        this.min_number = min;
        this.max_number = max;
    }

    guess() {
        this.guess_number = Math.round((this.min_number + this.max_number) / 2);
        return this.guess_number;
    }

    lower() {
        this.max_number = this.guess_number;
    }

    greater() {
        this.min_number = this.guess_number;
    }
}

module.exports = GuessingGame;
