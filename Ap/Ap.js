//Arithmetic Progression

var a = 2;
a = parseInt(a);
var b = 5;
b = parseInt(b);
var N = 7;
N = parseInt(N)
var findNthTerm = (first, second, num) => {
   var diff = second - first;
   var fact = (num - 1) * diff;
   var term = first + fact;
   return term;
};
console.log(findNthTerm(a, b, N));