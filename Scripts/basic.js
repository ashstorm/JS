console.log('Hello World!');
console.error('This is an error');      
console.warn("It's a warning");

//window object is the parent object
console.log(window);
//so both of these are the same
//alert(1);
//window.alert(1);

//var is not really used anymore

let age_1 = 30;
age_1=31;
console.log(age_1);

/*const years=30;
years=31;
console.log(years);
const old;*/
//It will show an error in both cases

//Data Types
const name = "John";
const age = 29;
const rating = 4.3;
const isYoung = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isYoung);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

//Concatenation
console.log('My name is '+name+' and i am ' + age);
//Template Strings
console.log(`My name is ${name} and i'm ${age}`);

const s = 'Hello World';
//Properties
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));
const t = `IT, CSE, ME, ECE`;
console.log(t.split(', '));