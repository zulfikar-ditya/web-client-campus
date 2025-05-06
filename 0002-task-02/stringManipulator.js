"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFirstOccurrence = removeFirstOccurrence;
/**
 * Removes the first occurrence of a substring from a string
 * @param str Original string
 * @param substr Substring to remove
 * @returns Modified string with the first occurrence removed
 */
function removeFirstOccurrence(str, substr) {
    var index = str.indexOf(substr);
    if (index === -1)
        return str;
    return str.substring(0, index) + str.substring(index + substr.length);
}
