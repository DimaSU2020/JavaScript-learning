let fizz = "Fizz";
let buzz = "Buzz";
for (let number = 1; number <= 100; number += 1) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log(fizz + buzz);
    } else if (number % 3 == 0) {
        console.log(fizz);
    } else if (number % 5 == 0) {
        console.log(buzz);
    }   else {
            console.log(number);   
        }
}
