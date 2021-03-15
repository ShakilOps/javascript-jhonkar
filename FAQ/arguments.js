function addNumber(num1,num2){
    var sum = 0
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num
        
    }
    return sum
}
var result = addNumber(3,7,5,2,9,6)
console.log(result)

//function parameter duita thakleo arguments use kore onk gulo parameter niye kaj kora jay 