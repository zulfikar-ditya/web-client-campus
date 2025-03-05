type calculateCircleResponse = {
	area: number;
	diameter: number;
	circumference: number;
};

// ====================== Task 1 ======================
const calculateRectangleArea = (width: number, height: number): number => {
	return width * height;
};

console.log(`Area of rectangle: ${calculateRectangleArea(5, 3)}`);

// ====================== Task 2 ======================
const calculateCircle = (radius: number): calculateCircleResponse => {
	const area = Math.PI * Math.pow(radius, 2);
	const diameter = 2 * radius;
	const circumference = 2 * Math.PI * radius;
	return {
		area,
		diameter,
		circumference,
	};
};

console.log(`Circle properties for radius 5:`, calculateCircle(5));

// ====================== Task 3 ======================
const findAngleOfTriangle = (angle1: number, angle2: number): number => {
	return 180 - (angle1 + angle2);
};

console.log(
	`The third angle in the triangle is: ${findAngleOfTriangle(80, 65)}`,
);

// ====================== Task 4 ======================
const getDiffInDays = (date1: Date, date2: Date): number => {
	const diffInTime = date2.getTime() - date1.getTime();
	const diffInDays = diffInTime / (1000 * 3600 * 24);
	return diffInDays;
};

console.log(
	`Difference in days between the dates: ${getDiffInDays(
		new Date("2021-01-01"),
		new Date("2021-01-10"),
	)}`,
);

// ====================== Task 5 ======================
const getInitials = (name: string): string => {
	const names = name.split(" ");
	const initials = names.map((name) => name.charAt(0).toUpperCase());
	return initials.join("");
};

console.log(`Initials of the name: ${getInitials("Zulfikar Ditya")}`);
