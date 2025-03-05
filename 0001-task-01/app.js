// ====================== Task 1 ======================
var calculateRectangleArea = function (width, height) {
    return width * height;
};
console.log("Area of rectangle: ".concat(calculateRectangleArea(5, 3)));
// ====================== Task 2 ======================
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
console.log("Circle properties for radius 5:", calculateCircle(5));
// ====================== Task 3 ======================
var findAngleOfTriangle = function (angle1, angle2) {
    return 180 - (angle1 + angle2);
};
console.log("The third angle in the triangle is: ".concat(findAngleOfTriangle(80, 65)));
// ====================== Task 4 ======================
var getDiffInDays = function (date1, date2) {
    var diffInTime = date2.getTime() - date1.getTime();
    var diffInDays = diffInTime / (1000 * 3600 * 24);
    return diffInDays;
};
console.log("Difference in days between the dates: ".concat(getDiffInDays(new Date("2021-01-01"), new Date("2021-01-10"))));
// ====================== Task 5 ======================
var getInitials = function (name) {
    var names = name.split(" ");
    var initials = names.map(function (name) { return name.charAt(0).toUpperCase(); });
    return initials.join("");
};
console.log("Initials of the name: ".concat(getInitials("Zulfikar Ditya")));
