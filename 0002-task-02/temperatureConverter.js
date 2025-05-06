"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fahrenheitToCelsius = fahrenheitToCelsius;
/**
 * Converts temperature from Fahrenheit to Celsius
 * @param fahrenheit Temperature in Fahrenheit
 * @returns Temperature in Celsius
 */
function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}
