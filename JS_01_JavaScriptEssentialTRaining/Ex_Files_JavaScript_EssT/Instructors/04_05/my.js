var a = 5/6;
var b = 18/25; 

var theBiggest = function() {
  var result;
  a>b ? result = ["a", a] : result = ["b", b];
  return result;
}

console.log(theBiggest())

//  The Var "theBiggest"  hold an anonymous function, it's like it is the function but it's not.  To call the function, you call it like it IS the function's name... weird 

