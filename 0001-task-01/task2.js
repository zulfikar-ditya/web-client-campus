"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCircle = void 0;
var calculateCircle = function (radius) {
    var area = Math.PI * Math.pow(radius, 2);
    var diameter = 2 * radius;
    var circumference = 2 * Math.PI * radius;
    return {
        area: area,
        diameter: diameter,
        circumference: circumference,
    };
};
exports.calculateCircle = calculateCircle;
