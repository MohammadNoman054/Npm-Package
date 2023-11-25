
const calculator = (a, b, operation) => {
    if (operation == 'add' || operation == '+') {
        return a + b;
    }
    else if (operation == 'subtract' || operation == '-') {
        return a - b;
    }
    else if (operation == 'multiply' || operation == '*') {
        return a * b;
    }
    else if (operation == 'divide' || operation == '/') {
        return a / b;
    }
    else if (operation == 'modulus' || operation == '%') {
        return a % b;
    }
    else {
        return 'Invalid Operation';
    }
}

module.exports = calculator;
