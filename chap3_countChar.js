function countChar(string, symbol) {
    let countB = 0;
    for (let index = 0; index <= (string.length - 1); index++) {
        if (string[index] === symbol) { 
            countB++;
        }
    }
    return countB;
}
const string = 'Our dancing studio BBB won The Best Dancing Studio';
const symbol = 's';
const numberSymbols = countChar(string, symbol);
console.log(`В строке: ${string} \nколичество символов "${symbol}" равно ${numberSymbols}`); 