"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAngleOfTriangle = findAngleOfTriangle;
/**
 * Calculates the third angle of a triangle given two angles
 * @param angle1 - First angle in degrees
 * @param angle2 - Second angle in degrees
 * @returns The third angle in degrees
 */
function findAngleOfTriangle(angle1, angle2) {
    return 180 - angle1 - angle2;
}
