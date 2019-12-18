let arr =[1,2,3,4];
let x = arr;
x[1]=5; // reference
let y =[...arr];
console.log(x);
y[1]=2;
console.log(y);