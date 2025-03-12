"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFirstOccurrence = void 0;
/**
 * Removes the first occurrence of a search string from the target string.
 * @param targetString The string to search within
 * @param searchString The substring to remove
 * @returns A new string with the first occurrence of searchString removed
 */
var removeFirstOccurrence = function (targetString, searchString) {
    if (!targetString || !searchString) {
        return targetString;
    }
    var index = targetString.indexOf(searchString);
    if (index === -1) {
        return targetString;
    }
    return (targetString.substring(0, index) +
        targetString.substring(index + searchString.length));
};
exports.removeFirstOccurrence = removeFirstOccurrence;
