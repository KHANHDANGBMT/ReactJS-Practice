function foo(){
    return [1,2,3];
}
const [a,b,c] = foo(); // destructuring
console.log(a);

function bar(){
    return{
        x:11,
        y:21,
        z:31
    }
}
const {x:x,y:y,z:z}=bar();
console.log(x);