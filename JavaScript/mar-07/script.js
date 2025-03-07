/* 
JavaScript Conditional Statements:

1. if, else if, esle

2. Switch
*/

/* 
Task: Write a program to take an input from the user and check:
if the amount is less than 100 give 0% discount.
if the amount is greater than 100 give 10% discount.
if the amount is larger than 1000 give 15% discount.
*/

// let amount = +prompt("Enter the amount: ");

// if (amount < 100) {
//   console.log("No discount wil be given!");
// } else if (amount >= 100 && amount < 1000) {
//   console.log("10% discount will be given!");
// } else if (amount >= 1000) {
//   console.log("15% discount will be given!");
// } else {
//   console.log("Invalid Input");
// }

/* 
Task: Write a program to and print and check the following:
1. If the number is divisible by 3 print "Foo"
2. If the number is divisible by 5 print "Bar"
3. If the number is divisible by 3 and 5 print "FooBar"
4. If the number is not divisible by 3 and 5 print the number
*/

// Incorrect Solution!!!!!!!!!!
/* let num = +prompt("Enter a number: ");

if (num % 3 == 0) {
  console.log("Foo");
} else if (num % 5 == 0) {
  console.log("Bar");
} else if (num % 3 == 0 && num % 5 == 0) {
  console.log("FooBar");
} else {
  console.log(num);
}
 */

/* 
Write a program that prints weekname depending on the following number:

1 = Sunday
2 = Monday
3 = Tuesday
4 = Wednesday
5 = Thursday
6 = Friday
7 = Saturday
*/

let num = +prompt("Enter a number: ");

switch (num) {
  case 1:
    console.log("Sunday!");
    break;

  case 2:
    console.log("Monday!");
    break;

  case 3:
    console.log("Tuesday!");
    break;

  case 4:
    console.log("Wednesday!");
    break;

  case 5:
    console.log("Thursday!");
    break;

  case 6:
    console.log("Friday!");
    break;

  case 7:
    console.log("Saturday!");
    break;

  default:
    console.log("Invalid Input!");
    break;
}
