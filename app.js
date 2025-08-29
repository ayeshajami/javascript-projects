// app.js
const math = require("./math.js");

console.log(math);          // { sum: [Function], mul: [Function], g: 9.8, pi: 3.14 }
console.log(math.sum(2,3)); // 5
console.log(math.mul(4,5)); // 20
console.log(math.g);        // 9.8
console.log(math.pi);       // 3.14
