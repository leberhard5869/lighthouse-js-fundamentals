const calculateRectangleArea = function (length, width) {
  if(length < 0 || width < 0) {
    return;
  } else return length * width;
}

const calculateTriangleArea = function (base, height) {
  if(base < 0 || height < 0) {
    return;
  } else return 0.5 * base * height;
}

const calculateCircleArea = function (radius) {
  if(radius < 0) {
    return;
  } else return Math.PI * radius * radius;
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(20)); // should print 314.159...
console.log(calculateCircleArea(1.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined