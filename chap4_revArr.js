function getRange(start, end, step = 1) {
    const range = [];
    for (let number = start; number <= end; number += step) {
        range.push(number);
    }
    return range;
}
console.log(getRange(1, 6));

function reverseArray(range) {
    let revArrTest = [];
    range.forEach(function(item, index, range) {
        revArrTest.unshift(range[index]);  
    });
    return revArrTest;
}
console.log(reverseArray(getRange(1, 6)));

function reverseArrayInPlace(range) {
    let addNum = 0;
    for (i = 0; i < Math.floor(range.length / 2); i++) {
        addNum = range[i];
        range[i] = range[range.length - 1 - i];
        range[range.length - 1 - i] = addNum;
    }
    return range;
}
console.log(reverseArrayInPlace(getRange(1, 6)));