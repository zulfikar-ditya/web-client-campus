import { calculateRectangleArea } from "./rectangleCalculator";
import { calculateCircle } from "./circleCalculator";
import { findAngleOfTriangle } from "./triangleCalculator";
import { getDiffInDays } from "./dateCalculator";
import { getInitials } from "./stringFormatter";

console.log(`Area of rectangle: ${calculateRectangleArea(5, 3)}`);
console.log(`Circle properties for radius 5:`, calculateCircle(5));
console.log(
	`The third angle in the triangle is: ${findAngleOfTriangle(80, 65)}`,
);
console.log(
	`Difference in days between the dates: ${getDiffInDays(
		new Date("2021-01-01"),
		new Date("2021-01-10"),
	)}`,
);
console.log(`Initials of the name: ${getInitials("Zulfikar Ditya")}`);
