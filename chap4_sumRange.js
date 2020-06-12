function getRange(start, end, step = 1) {
    const range = [];
    for (let number = start; number <= end; number += step) {
        range.push(number);
    }
    return range;
}
console.log(getRange(1, 10));

function sum(range) {
    let sumArray = 0;
    range.forEach(function(item, index, range) {
      sumArray += range[index] });
    return sumArray;
}
console.log(sum(getRange(1, 10)));
