let a = "red";
let b = "blue";

c = a;
a = b || a;
b = c;

console.log(a);
console.log(b);
