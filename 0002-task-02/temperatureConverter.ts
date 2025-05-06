/**
 * Converts temperature from Fahrenheit to Celsius
 * @param fahrenheit Temperature in Fahrenheit
 * @returns Temperature in Celsius
 */
export function fahrenheitToCelsius(fahrenheit: number): number {
	return ((fahrenheit - 32) * 5) / 9;
}
