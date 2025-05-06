import { fahrenheitToCelsius } from "./temperatureConverter";
import { centiToKm } from "./distanceConverter";
import { isOdd } from "./numberUtils";
import { removeFirstOccurrence } from "./stringManipulator";
import { isPalindrome } from "./palindromeChecker";

console.log("===================Task 1=================");
console.log(`Input: 100. Result: ${fahrenheitToCelsius(100)}`);
console.log("===================Task 1=================");

console.log("===================Task 2=================");
console.log(`Input: 100000. Result: ${centiToKm(100000)} km`);
console.log("===================Task 2=================");

console.log("===================Task 3=================");
console.log(`Input: 100. Result: ${isOdd(100)}`);
console.log(`Input: 101. Result: ${isOdd(101)}`);
console.log("===================Task 3=================");

console.log("===================Task 4=================");
console.log(
	`Input: "Hello World Hello". Result: ${removeFirstOccurrence(
		"Hello World Hello",
		"Hello",
	)}`,
);
console.log(
	`Input: "Test Test". Result: ${removeFirstOccurrence("Test Test", "Test")}`,
);
console.log("===================Task 4=================");

console.log("===================Task 5=================");
console.log(`Input: "abcba". Result: ${isPalindrome("abcba")}`);
console.log(`Input: "12321". Result: ${isPalindrome("12321")}`);
console.log("===================Task 5=================");
