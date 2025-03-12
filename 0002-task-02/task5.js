"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
/**
 * Checks if a string is a palindrome.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward.
 *
 * @param str - The string to check
 * @returns true if the string is a palindrome, false otherwise
 */
var isPalindrome = function (str) {
    var cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    var reversed = cleanStr.split("").reverse().join("");
    return cleanStr === reversed;
};
exports.isPalindrome = isPalindrome;
