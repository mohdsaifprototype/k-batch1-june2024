/* 
Loops: Repetition cycle

iterations: no. of repetitions

In JavaScript there are multiple types of loops. Some of the most commonly used loops are:

1. while loop
2. do while loop
3. for loop
*/

/* Write a program to print the numbers from 1 to 10 */

/* While loop */

// let i = 121;                  // initialization

// while (i <= 120) {            // condition
//   console.log(i);
//   i++;                        // Steps: increment / decrement
// }

/* Do while loop: exit control loop */
// let num = 111;
// do {
//   // num = prompt("Enter a number: ");
//   // console.log(num);
//   console.log("Do while loop executed!", num);
//   num++;
// } while (num <= 120);

/* 
for loop 
  Syntax:
  for (initialization; condition; steps) {
    Statement to be executed;
  }
*/

// for (let i = 1; i <= 10; i++) {
//   console.log("The value of i is:", i);
// }

// // console.log("The value of i outside the loop is:", i);

/* Write a program to print the table of a number */

// let num = +prompt("Enter a number: ");

// for (let i = 1; i <= 10; i++) {
//   console.log(num, "x", i, "=", num * i);
// }

/* Write a program to print the sum of numbers from 1 to 10 */

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);