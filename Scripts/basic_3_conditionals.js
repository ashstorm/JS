//basic if statements
let x=11;     //x='10' would work with == in if stmnt but not with === in if stmnt
if(x===10) {
    console.log(`x is 10`);
}
else if(x>10){
    console.log(`x is greater than 10`);
}
else {
    console.log(`x is less than 10`);
}

//and,or operators
const y=12;
if(x<10||y>10){         //or
    console.log(`It works`);
}
if(x<10&&y>10){         //and 
    console.log(`It works`);
}                       //no output

//Ternary operator
const answer=x<10?`true`:`false`;
console.log(answer);

//Switch statement
switch(answer){
    case `true`:
        console.log(`statement is true`);
        break;
    case `false`:
        console.log(`statemnt is false`);
        break;
    default:
        console.log(`statement has problems`);
        break;
}