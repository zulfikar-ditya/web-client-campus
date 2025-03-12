"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInitials = void 0;
var getInitials = function (name) {
    var names = name.split(" ");
    var initials = names.map(function (name) { return name.charAt(0).toUpperCase(); });
    return initials.join("");
};
exports.getInitials = getInitials;
