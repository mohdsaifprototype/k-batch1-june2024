let myOutput = document.querySelector("#output");

// myOutput.innerHTML = "adfuhiauofh";

let arr = ["ted", "bunny", "apple", "red", 35, 20,];
console.log("Array is:", arr);

arr[0] = "fed";
arr[6] = 21;

console.log("Array is:", arr);

// arr[6] = undefined;
// arr.pop();
// arr.pop();
// arr.pop();

arr.push("orange");
console.log("Array is:", arr);

console.log("Length of the array is:", arr.length);

/* To print the last element of the array we have the following ways */
// console.log("The last element of the array is:", arr[arr.length - 1]);
// console.log("The last element of the array is:", arr.at(-1))

// arr[0] = null;
// arr.shift();
// arr.shift();
arr.shift();

console.log("Array is:", arr);

arr.unshift("Aman");

console.log("Array is:", arr);