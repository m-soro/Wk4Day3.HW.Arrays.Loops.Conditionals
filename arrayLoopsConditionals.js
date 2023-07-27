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

for (let i = 1; i <= 200; i++) {
  i % 3 === 0 && i % 5 == 0
    ? console.log(`FizzBuzz`)
    : i % 3 === 0
    ? console.log(`Fizz`)
    : i % 5 === 0
    ? console.log(`Buzz`)
    : console.log(i);
}
