"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = isPalindrome;
/**
 * Checks if a string is a palindrome (reads the same backward as forward)
 * @param str String to check
 * @returns True if the string is a palindrome, false otherwise
 */
function isPalindrome(str) {
    var reversed = str.split("").reverse().join("");
    return str === reversed;
}
