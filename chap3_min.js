function minNumber(a, b) {
  let comparison = null;
  if (a > b == true) {
    comparison = b;  
  } else {
    comparison = a;
    }
  return comparison;
}
console.log(minNumber(39, 43));