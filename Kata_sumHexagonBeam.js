const n = 4;
const seq = [2,4,6,8,10,12,14];

function sumHexagonBeam(seq, n) {
    const rowsLength = seq.length * 2 - 1;
    const columnsLength = rowsLength * 2 - 1;
    const index = seq.length - 2;
    const empty = " ";
    let lineOut = "";
    let seqLength = seq.length;
    let seqOut = seq;
    let arrayOut = [];
    arrayOut[0] = [];
    //  готовим массив из повторяющейся последовательности входного массива
    for (let l = 0; l < seqLength * 40; l++) {
        seqOut.push(seq[l]);
    }
    //  вырезаем из массива окном плавающей длины будующие строки двумерного массива
    let minIndex = 0;
    let maxIndex = 0;
    for (let lengthArr = 0; lengthArr < rowsLength; lengthArr++) {
        maxIndex = minIndex + seqLength;
        arrayOut[lengthArr] = seqOut.slice(minIndex, maxIndex);
        minIndex = maxIndex;
        if (lengthArr <= index) {
            seqLength++;
        } else { 
            seqLength--;
            } 
    }
    //  заполняем строки нолями до равной длины всех строк
    for (let j = 0; j < rowsLength; j++) {
        let ind = arrayOut[j].length;
        for (i = 0; i < ind - 1; i++) {
            arrayOut[j].splice((i * 2) + 1, 0, 0);
        }
        for (number = 1; number <= (columnsLength - arrayOut[j].length) / 2;) {
            arrayOut[j].unshift(0);
            arrayOut[j].push(0);
        }
    }
    //  считаем сумму по горизонтальным линиям, находим максимум
    let sumMax = 0;
    let sum = 0;
    for (j = 0; j < rowsLength; j++) {
        sum = 0;
        for (i = 0; i < columnsLength; i++) {
            sum = sum + arrayOut[j][i];   
        }
        if (sum > sumMax) {
            sumMax = sum;
        }
    }
    //  делаем графическую иллюстрацию, заменяем ноли на пробелы, вывод делаем строчный  
    for (j = 0; j < rowsLength; j++) {
        for (i = 0; i < columnsLength; i++) {
            if (arrayOut[j][i] === 0) {
                lineOut = lineOut + empty;
            } else {
                lineOut = lineOut + arrayOut[j][i];
            }
        }
        lineOut = lineOut + '\n';  
    }
    console.log(lineOut);
    return sumMax;
} 
console.log(sumHexagonBeam(seq, n));