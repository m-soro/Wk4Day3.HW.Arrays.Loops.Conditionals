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

for (let turtle of turtles) {
  console.log(turtle.toUpperCase());
}
