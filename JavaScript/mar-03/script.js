// This is a single line comment

/* 
This is a 
multi line 
comment
*/

// Keywords: reserved words that has some special meaning in the programming language.

/* 
To create a variable we can use the following keywords:

var
let
const
*/

/* var name = "John Doe";
let age = 30;
const pi = 3.14;
 */
/* 
  When we store data in a variable we usally use a data types to describe the data that is stored in the variable.

  There are 8 data types in JavaScript:

  Number
  BigInt
  String
  Boolean
  Null
  Undefined
  Object
  Symbol
*/

/* 1. Number */

let age = 21;
const PI = 3.14;

console.log("The value of PI is:", PI);
console.log("Age is:", age);

age = 22;
console.log("Age is:", age);

let balance = 1_000_000_000_000_000;
console.log(balance);

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

console.log(bigInt);

// Have a look at script1.js

/* 2. String */
let usrName1 = "Saif";
let usrName2 = 'Aman Kanojia';

/* Template literal or template string */
let greeting = `Hello! and welcome ${usrName1}!`;

console.log(greeting);