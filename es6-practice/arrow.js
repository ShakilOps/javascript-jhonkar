// function double(num){
//     return num *2
// }

//another way to declare
// const double = function myFun(num){
//     return num*2
// }

//another way to es6
//const double = num => num*2
const add = (x,y) => x + y
const doMath = (x,y) => {
    const sum = x + y
    const diff = x - y
    const result = sum * diff 
    //const diye result jdi functioner vitore thake tahole baire result console log korle konoi somossa nai
    //const diye scope er itor result declare korle kono somossa hbe na ..sudhu oi liner jonnoi oita karjokor
    return result
}
//const result = double(15)
const result2 = add(50,60)
const result = doMath(8,5)
console.log(result)