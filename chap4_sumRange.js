function range(start, end, step) {
  let arrayNum = [];
  let move = (step === undefined) ? 1 : step;
  let number = start;
  for (let index = 0; index < end; index += move) {
    arrayNum.push(number);
    number += move;
  }
  return arrayNum;
}
console.log(range(1, 10));

function sum(array) {
  let sumArray = 0;
  array.forEach(function(item, index, array) {
    sumArray += array[index] });
  return sumArray;
}
console.log(sum(range(1, 10)));
