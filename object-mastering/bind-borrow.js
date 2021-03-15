const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
         console.log(this.firstName, this.lastName)
    },
    chargeBill: function(amount){
        console.log(this)
        this.salary = this.salary - amount
        return this.salary
    }
}

const heroPerson = {
    firstName : 'Hero',
    lastName : 'Alam',
     salary : 25000
}

const anotherPerson = {
    firstName: 'Tom',
    lastName: 'Hill',
    salary:35000
}

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson)
heroChargeBill(4000)
heroChargeBill(7000)
console.log(heroPerson.salary)
console.log(normalPerson.salary)

//bind hosse ekta object thke arekta object er method access kora
