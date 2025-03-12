"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDiffInDays = void 0;
var getDiffInDays = function (date1, date2) {
    var diffInTime = date2.getTime() - date1.getTime();
    var diffInDays = diffInTime / (1000 * 3600 * 24);
    return diffInDays;
};
exports.getDiffInDays = getDiffInDays;
