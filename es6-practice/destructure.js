const person = {name : 'vadaima', age : 20, address : 'nibbay', gfName : 'zorina'}
 const {age, gfName,address} = person

 console.log(gfName, address)

 const friends = ['sakib', 'karim', 'mahin', 'muktadir']
 const [first, next, ...rest] = friends
 console.log(rest)
 //kono ekta bishal array or object theke ekta or duita element ke onno arekta variable ee rakhat sghortcut upayke e hlo destructurer

 //another way
 const complexObj = {
     name : 'xyz',
     info :{
         age : 30,
         phone : 785634
     }
 }
 const {phone} = complexObj.info
 console.log(phone)