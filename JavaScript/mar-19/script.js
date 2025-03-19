/* 
Questions: What is an arry?
Answer: In JavaScript an array is a collection of multiple values stored in a single variable.
*/

let sub = [78, 75, 95, 85, 90];

// output.innerHTML = "adfuha";

let myOutput = document.querySelector("#output");

myOutput.innerHTML = `
The length of the array is: ${sub.length} <br>
The first element of the array is: ${sub[0]} <br>
The last element of the array is: ${sub[sub.length - 1]} <br>
The last element of the array is: ${sub[4]}
`;

for (let i = 0; i < sub.length; i++) {
  console.log("The value of subject", i + 1, "is", sub[i]);
}