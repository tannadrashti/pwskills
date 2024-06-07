function calculateTax(income) {
    if (income <= 10000) {
        return income * 0.1;
    } else if (income <= 50000) {
        return 10000 * 0.1 + (income - 10000) * 0.2;
    } else {
        return 10000 * 0.1 + 40000 * 0.2 + (income - 50000) * 0.3;
    }
}


console.log(calculateTax(5000));
console.log(calculateTax(15000));
console.log(calculateTax(60000));
