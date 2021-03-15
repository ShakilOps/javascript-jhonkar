const ages = [12,34,56,89,65]
const ages1 = [45,78,12,43,54]
const ages2 = [23,67,77]

//const allAges = ages.concat(ages2).concat([100]).concat(ages1)
//in es6
const allAges2 = [...ages, ...ages2,...ages1]
console.log(allAges2)

const bus = 200
 const pri = 300
 const tue = 400
 const all=[200, 400, 300]
 //const max = Math.max(bus, pri, tue)
 const max = Math.max(...all)
 //es6 e three dots dile seta direct array vitore element gulo access korte pare
 console.log(max)