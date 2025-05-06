"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInitials = getInitials;
/**
 * Gets the initials from a name
 * @param name - Full name
 * @returns The initials of the name
 */
function getInitials(name) {
    return name
        .split(" ")
        .map(function (word) { return word.charAt(0).toUpperCase(); })
        .join("");
}
