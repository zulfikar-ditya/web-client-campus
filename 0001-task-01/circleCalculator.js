"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCircle = calculateCircle;
/**
 * Calculates properties of a circle
 * @param radius - Radius of the circle
 * @returns Object containing area and circumference
 */
function calculateCircle(radius) {
    return {
        area: Math.PI * radius * radius,
        circumference: 2 * Math.PI * radius,
    };
}
