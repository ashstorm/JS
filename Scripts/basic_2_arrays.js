//Arrays
//least used method
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

//other way
const fruits = ['apples', 'oranges','melons'];
console.log(fruits);
console.log(fruits[1]);

//in JS an array can have different data types
const fs = ['apples', 'oranges', 10, true];
console.log(fs);

// adding values to array
//less used method
fruits[3]='grapes';
console.log(fruits);

//other way to add value to start and end of the list
fruits.push('mangoes');  //end of the list
fruits.unshift('bananas'); //start of list
console.log(fruits);

//removes last element
fruits.pop();  
console.log(fruits);

//to check to see if something is an array
console.log(Array.isArray(fruits));
//index of
console.log(fruits.indexOf('grapes'));

//object literals
const person = {
    firstName: `Ash`,
    lastName: `Storm`,
    age: 30,
    hobbies: [`rock climbing`, `coding`, `video games`],   //mutiple values
    address: {  //nested objects
        street:`15 fly st`,
        city: `Delhi`,
        state: `ND`,
    }
}
//alert(person);  //only leads to an error type statement 
console.log(person);

//separating different logs with commas
console.log(person.firstName, person.lastName);

//getting specific values
console.log(person.hobbies[1]);
console.log(person.address.city);

//pulling variables out separately (destructuring)
const {firstName, lastName, address:  {city}} = person;
console.log(firstName, lastName, city);

//adding properties
person.email = `aayushsharma1511@gmail.com`;
console.log(person);

//usage of arrays
const todolist = [
                    {
                    id:1,
                    text:'Call Jacob',
                    isCompleted: true
                    },
                    {
                    id:2,
                    text:'Buy Groceries',
                    isCompleted: false
                    },
                    {
                    id:3,
                    text:'Meetup with Kevin',
                    isCompleted: true
                    },
];
console.log(todolist);

//specific parts usage
console.log(todolist[0].text);

//convert to JSON
const todoJSON=JSON.stringify(todolist);
console.log(todoJSON);

//LOOPS

//for loop
for(let i=0;i<=10; i++){
    console.log(`currently at ${i}`);
}

//while loop
let z=0;
while (z<10) {
    console.log(`currently at ${z}`);
    z++;
}
/*I'm gonna comment this part out to regain some space on the console
//Looping through an array
for(let i=0;i<todolist.length; i++){
    console.log(todolist[i].text);
}

//for of loop
for(let todo of todolist){
 console.log(todo.text);
}
*/

/* The chaining example is enough
//high order arrays
//forEach
todolist.forEach(function(todos){
    console.log(todos.text);
})

//Map
const todoText= todolist.map(function(todo){
    return todo.text;
})
console.log(todoText);

//filter
const todoCompleted = todolist.filter(function(todo){
    return todo.isCompleted === true;
})
console.log(todoCompleted);
*/
//chaining methods
const todoCompleted = todolist.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo) {
       return todo.text;
       })
console.log(todoCompleted);