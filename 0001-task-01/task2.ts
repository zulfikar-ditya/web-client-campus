export type calculateCircleResponse = {
	area: number;
	diameter: number;
	circumference: number;
};

export const calculateCircle = (radius: number): calculateCircleResponse => {
	const area = Math.PI * Math.pow(radius, 2);
	const diameter = 2 * radius;
	const circumference = 2 * Math.PI * radius;
	return {
		area,
		diameter,
		circumference,
	};
};
