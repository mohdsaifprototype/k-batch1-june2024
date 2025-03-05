/* 
Type conversion: type conversion mean change of value from one datatype to another datatype.
There are two types of type conversion:

1. Implicit type conversion
2. Explicit type conversion
*/

/* 
1. Implicit type conversion: where values are converted automatically from one type to another.
*/
let a = 5;
let b = "3";

console.log("The value of a is:", a);
console.log("The value of b is:", b);

console.log("a + b =", a + b);
console.log("a - b =", a - b);

/* 
2. Explicit type conversion: where values are converted manually from one type to another.
*/

console.log("a + b =", a + Number(b));
console.log("a + b =", a + +b);