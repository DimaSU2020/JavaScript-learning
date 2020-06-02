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
console.log(range(1, 3));


function arrayToList(arrayNum) {
    let list = {
        value: arrayNum[0],
        next: {
          value: arrayNum[1],
          next: {
            value: arrayNum[2],
            next: null
          }
        }
    };
    return list;
}
console.log(arrayToList(range(1, 3)));