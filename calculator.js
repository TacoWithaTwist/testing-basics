class calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (a === 0 || b === 0) {
      return null;
    } else {
      return a / b;
    }
  }
}
newCalc = new calculator();
module.exports = newCalc;
