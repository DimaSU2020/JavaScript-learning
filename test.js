let size = 8;
let numberLine = 0;
let empty = " ";
let grill = "#";
let lineOut = "";
for (let number = 0; number < ((size * size) / 2); number += 1) {
    if (number % (size / 2) == 0) {
        numberLine += 1;
        lineOut = lineOut + '\n';   
    } if (numberLine % 2 == 0) {
        lineOut = lineOut + grill + empty;
    }
    else {
        lineOut = lineOut + empty + grill;  
    }
}
console.log(lineOut);

