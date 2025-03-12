"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fahrenheitToCelsius = void 0;
/**
 * Converts a temperature from Fahrenheit to Celsius.
 * @param fahrenheit The temperature in Fahrenheit.
 * @returns The temperature in Celsius.
 */
var fahrenheitToCelsius = function (fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
};
exports.fahrenheitToCelsius = fahrenheitToCelsius;
