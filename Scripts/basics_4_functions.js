//Basic Functions
function add(num1, num2) {
    return (num1 + num2);
}
//add();  //Output: NaN Not a Number
console.log(add(6, 7));

//Arrow functions
const addNums = (num1=1, num2=1) => num1 +num2;
console.log(addNums(5,5));

/*  using class instead of this
//Constructor Function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);   //consrutor for date
          //just pushing them to prototype no need to worry
//    this.fullName = function() {
//        return`${firstName} ${lastName}`;
//    }
//    this.birthYear = function() {
//        return this.dob.getFullYear();
//    }   
}

//attaching the methods to the prototype
Person.prototype.birthYear = function(){
    return this.dob.getFullYear();
}

Person.prototype.fullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
*/

//CLASS
class Person{
    constructor(firstName,lastName,dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
     }
    
     birthYear(){
         return this.dob.getFullYear();
     }
     
     fullName(){
         return `${this.firstName} ${this.lastName}`;
     }
}

//Instantiate object
const person1 = new Person(`Ash`,`Storm`,`11-12-1995`);
const person2 = new Person(`Jane`,`Doe`,`01-01-1990`);

console.log(person1);
console.log(person2.dob.getFullYear());   //specific properties
console.log(person1.birthYear());
console.log(person1.fullName());