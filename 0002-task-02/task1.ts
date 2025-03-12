/**
 * Converts a temperature from Fahrenheit to Celsius.
 * @param fahrenheit The temperature in Fahrenheit.
 * @returns The temperature in Celsius.
 */
export const fahrenheitToCelsius = (fahrenheit: number): number => {
	return ((fahrenheit - 32) * 5) / 9;
};
