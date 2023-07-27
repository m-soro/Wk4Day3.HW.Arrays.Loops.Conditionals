/**
 * Mark Soro
 * WK4 DAY 3 LAB Assignment/Lab
 * @link
 */

console.log("\n======== PART II: JAVASCRIPT REPS ========\n");
console.log("\n======== EASY GOING ========\n");
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }
console.log("\n======== GET EVEN ========\n");
// for (let i = 0; i <= 200; i += 2) {
//   console.log(i);
// }
console.log("\n======== FIZZ BUZZ ========\n");

// for (let i = 1; i <= 200; i++) {
//   i % 3 === 0 && i % 5 == 0
//     ? console.log(`FizzBuzz`)
//     : i % 3 === 0
//     ? console.log(`Fizz`)
//     : i % 5 === 0
//     ? console.log(`Buzz`)
//     : console.log(i);
// }

console.log("\n======== WILD WILD LIFE ========\n");

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// plantee[2] = plantee[2] += 1;
// console.log(plantee[2]);
// wolfy[3] = "Gotham City";
// console.log(plantee[2]);
// dart.push("Hawkins");
// console.log(dart);
// // trying out the splice method
// wolfy.splice(0, 1);
// wolfy.splice(0, 0, "Gameboy");
// console.log(wolfy);

const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// for (let turtle of turtles) {
//   console.log(turtle.toUpperCase());
// }

const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];

console.log(`The index of Titanic is : ${favMovies.indexOf("Titanic")}`);
favMovies.push("Batman");

console.log(`Before sort.()`);
console.log(favMovies);
favMovies.sort();
console.log(`After sort.()`);
console.log(favMovies);

/**
 * use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
 * yes
 */
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
// console.log(favMovies);
// .shift() removes the first element from an array and returns that removed element
console.log(favMovies.shift()); // removes and returns the first element
// console.log(favMovies);
// .unshift() method adds the specified elements to the beginning of an array and returns the new length of the array
// I did not specify what to add so it should just log the length of the array. Just like .length
console.log(favMovies.unshift());
// console.log(favMovies);

// console.log(favMovies.indexOf("Django Unchained")); // this returns the index of django
// .splice mutates the original arry permanently it can remove, replace and add element to an array
favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar");
console.log(favMovies);

// slice returns a copy of the arry. it doesnt mutate the array
// it returns a copy of the operated array
//console.log(favMovies.length / 2); // this is the middle of the array
const halfArray = favMovies.slice(favMovies.length / 2);
console.log(halfArray);
console.log(favMovies.indexOf("Fast and Furious")); // it returns negative one

// const means you just cant re-assign this variable to another variable

console.log("\n======== WHERE IS WALDO ========\n");
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"), 1);
//prettier-ignore
console.log(`Does the array containes Eggbert? ${whereIsWaldo.includes("Eggbert")}`);
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1]);

console.log("\n======== EXCITED KITTEN ========\n");

for (let i = 1; i <= 20; i++) {
  i % 2 === 0
    ? console.log("...human...why you taking pictures of me?...")
    : console.log("Love me, pet me! HSSSSSS!");
}

console.log("\n======== FIND THE MEDIAN ========\n");

/**
 * ----------------
 * FIND THE MEDIAN
 * ----------------
 * Arrange the data points from smallest to largest.
 * If the number of data points is odd, the median is the middle data point in the list.
 * If the number of data points is even, the median is the average of the two middle data
 * points in the list.
 */

const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];
console.log(nums.sort());
console.log(nums.length / 2);
const midArray = Math.floor(nums.length / 2);
console.log(nums[midArray]);
