const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
         console.log(this.firstName, this.lastName)
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount
        return this.salary
    }
}
//object er vitor kono ekta method ba function theke oi objecteroi arekta property ke access
//korte chaile this keyword use hobe
//r bahir theke access korte chaile function name dot oi property 

//console.log(normalPerson)
normalPerson.chargeBill(5000)
console.log(normalPerson.salary)