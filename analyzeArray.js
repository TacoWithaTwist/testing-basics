class analyzeArray {
  constructor(array) {
    this.maximum = function () {
      let max = array[0];
      array.forEach((element) => {
        if (max < element) {
          max = element;
        }
      });
      return max;
    };
    this.minimum = function () {
      let min = array[0];
      array.forEach((element) => {
        if (min > element) {
          min = element;
        }
      });
      return min;
    };
    this.average = function () {
      let aux;
      for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
          if (array[j] < array[i]) {
            aux = array[j];
            array[j] = array[i];
            array[i] = aux;
          }
        }
      }
      let mid = parseInt(array.length / 2);
      return array[mid];
    };
    this.length = function () {
      return array.length;
    };
  }
}
const arrayAnalyzer = new analyzeArray([1, 8, 3, 4, 2, 6]);
module.exports = arrayAnalyzer;
