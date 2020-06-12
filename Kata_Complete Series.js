function stream(array) {
    const maxNum = Math.max(...array);
    const arrayOut = [];
    for (let i = 0; i <= array.length - 1; i++) {
        const number = array[i];
        const ind = i;
        for (let index = 0; index <= array.length - 1; index++) {
            if (number == array[index] && ind !== index) {
                arrayOut.push(0);
                return arrayOut;
            }
        }
    }
    for (let index = 0; index <= maxNum; index++) {
        arrayOut.push(index);
    }
return arrayOut;
}
console.log(stream([2, 1, 2]));
