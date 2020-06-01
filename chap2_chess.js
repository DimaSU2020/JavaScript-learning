const size = 2;  /* Сюда ввести число - размер шахматной доски */
const empty = " ";
const grill = "#";
let numberLine = 0;
let lineOut = null;
if (size % 2 == 0) {
    for (let number = 0; number < ((size * size) / 2); number += 1) {
        if (number % (size / 2) == 0) {
            numberLine += 1;
            lineOut = lineOut + '\n'; } 
        if (numberLine % 2 == 0) {
                lineOut = lineOut + grill + empty;
        }  else {
            lineOut = lineOut + empty + grill; 
        }
    }
    console.log(lineOut);
} else {
    console.log('Ошибка! size должен быть чётным')
}