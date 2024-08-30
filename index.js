// task-1 start here
const fruits = ["mango","banana","orange","apple","watermelon"];

console.log(fruits[3]);

fruits[2] = "jambura";

console.log(fruits);
// task-2 start here
const touristArea = ["bandarban","cox'sbazar","patuakhali"];

touristArea.push("kagrachari");

console.log(touristArea);

touristArea.push("sundarban","shylet");

console.log(touristArea);

touristArea.pop();
console.log(touristArea);

// task-3 start here
const booklist = ["bangla","english","Math","Physics","chemistry"];

console.log(booklist.includes("javascript"));

// task-4 start here
const number1 = 400;
const numbers = [1, 3, 5, 7, 10];
const number2 = ["one","three","four","five"];
const name = "sajjad";

console.log(Array.isArray(number1));
console.log(Array.isArray(numbers));
console.log(Array.isArray(number2));
console.log(Array.isArray(name));
