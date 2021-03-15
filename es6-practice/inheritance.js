class Parent {
    constructor(){
        this.fatherName = 'Rafiq'
    }
}
class Child extends Parent{
    constructor(name){
        super()
        this.name =  name
    }
    getFullName(){
        return this.name +' '+ this.fatherName
    }
    //class er vtor function create korte chaile function likhte hbe na just nam ta likhlei hbe 
}

const baby = new Child('tom')
const baby2 = new Child('tommy')
console.log(baby)
console.log(baby2)
console.log(baby.getFullName())