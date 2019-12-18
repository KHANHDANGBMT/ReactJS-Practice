// const numbers = [1,2,3];
// const newNumbers = [...numbers,4,5,6];
// console.log(newNumbers);
const filter = (...args)=>{
    return args.filter(element=>element === 1);
}
console.log(filter([1,2,3,4,1]));