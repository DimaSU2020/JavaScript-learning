function range(start, end, step = 1) {
  const move = step;
  let arrayNum = [];
  let number = start;
  for (let index = number; index <= end; index += move) {
    arrayNum.push(number);
    number += move;
  }
  return arrayNum;
}
console.log(range(1, 10, 2));

function sum(arrayNum) {
  let sumArray = 0;
  arrayNum.forEach(function(item, index, arrayNum) {
    sumArray += arrayNum[index] });
  return sumArray;
}
console.log(sum(range(1, 10, 2)));
