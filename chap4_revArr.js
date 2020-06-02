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
console.log(range(2, 20));

function reverseArray(arrayNum) {
    let revArrTest = [];
    arrayNum.forEach(function(item, index, arrayNum) {
        revArrTest.unshift(arrayNum[index]);  
    });
    return revArrTest;
}
console.log(reverseArray(range(2, 20)));