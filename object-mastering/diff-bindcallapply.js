const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
         console.log(this.firstName, this.lastName)
    },
    chargeBill: function(amount,tips,tax){
        console.log(this)
        this.salary = this.salary - amount-tips-tax
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

normalPerson.chargeBill.call(heroPerson,3000,2000,1000)
console.log(heroPerson.salary)

normalPerson.chargeBill.apply(anotherPerson, [3000,2000,1000])
console.log(anotherPerson.salary)

//bind,call,apply hosse ekta object theke kono method onno arekta object er upor kaj korale use hoy
//call r apply direct kaj kore extra vabe parameter alada deya lage na
//apply er khetre array use korte hoy