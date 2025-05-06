/**
 * Calculates properties of a circle
 * @param radius - Radius of the circle
 * @returns Object containing area and circumference
 */
export function calculateCircle(radius: number): {
	area: number;
	circumference: number;
} {
	return {
		area: Math.PI * radius * radius,
		circumference: 2 * Math.PI * radius,
	};
}
