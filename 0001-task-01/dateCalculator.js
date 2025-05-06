"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDiffInDays = getDiffInDays;
/**
 * Calculates the difference in days between two dates
 * @param date1 - First date
 * @param date2 - Second date
 * @returns The difference in days
 */
function getDiffInDays(date1, date2) {
    var diffTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
