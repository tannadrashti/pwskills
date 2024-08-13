class Calculator {
    constructor(value = 0) {
        this.value = value;
    }

    add(number) {
        this.value += number;
        return this; 
    }

    subtract(number) {
        this.value -= number;
        return this; 
    }

    multiply(number) {
        this.value *= number;
        return this; 
    }

    divide(number) {
        if (number !== 0) {
            this.value /= number;
        } else {
            console.error("Division by zero is not allowed.");
        }
        return this;
    }

    getResult() {
        return this.value;
    }
}


const result = new Calculator()
    .add(10)
    .subtract(2)
    .multiply(4)
    .divide(2)
    .getResult();

console.log(result); 
