let num1 = +prompt("Enter the first number: ");
let num2 = +prompt("Enter the second number: ");

if (num1 > num2) {
  console.log("The largest number is:", num1);
} else if (num1 < num2) {
  console.log("The largest number is:", num2);
} else if (num1 == num2) {
  console.log("Both numbers are equal!");
} else {
  console.log("Invalid Input! Please try again!");
}
