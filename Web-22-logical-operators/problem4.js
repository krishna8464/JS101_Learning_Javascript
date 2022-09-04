// Problem 4: Given 3 numbers (all different values), print which is greatest

// using if els and logical operators
let a = 4;
let b = 5;
let c = 6;
if (a>b && a>c){
  console.log(a+" is Greater");
}else if (b>a && b>c){
  console.log(b+" is Greater");
}else {
   console.log(c+" is Greater");
}

//usign ternary operators
a>b && a>c ? console.log(a+" is Greater") : b>a && b>c ? console.log(b+" is Greater") :console.log(c+" is Greater");

