console.log(window);
//just to look at the document object model inside


// Single Element Selectors
/*console.log(document.getElementById(`my-form`));        */

//you can do the same thing by assigning it to a variable

/*const form = document.getElementById(`my-form`);
console.log(form);      */

console.log(document.querySelector(`h1`));

//Multiple Element Selectors
console.log(document.querySelectorAll(`.item`));

//older method
/*console.log(document.getElementsByClassName(`item`));       
console.log(document.getElementsByTagName(`li`));       */

//loop through items using qurySelectorAll
/*const items = document.querySelectorAll(`.item`)
items.forEach((item) => console.log(item));     */

//to remove a tag with a class/id
/*const ul = document.querySelector(`.items`);
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = `First`;
ul.children[1].textContent = `Second`;
ul.lastElementChild.innerHTML = `<h2>Third</h2>`;       */

//changing colors
/*const btn = document.querySelector(`.btn`);
btn.style.background = `brown`;     */

//Events

//Event for a click
/*
const btn = document.querySelector(`.btn`);
btn.addEventListener(`click`, (e) => {
    e.preventDefault();     //To prevent it from going away (or submitting)
    console.log(`click`);
    /*console.log(e.target);
    console.log(e.target.className);        */
    
    //for changing background on-click
    /*document.querySelector(`#my-form`).style.background = `#888`;
    
    //for adding a pre-defined css class
    document.querySelector(`body`).classList.add(`bg-dark`);
    
    //for changing text and it's style
    ul.lastElementChild.innerHTML = `<h1>Hello</h1>`;       */
//});

//other type of events
/*
btn.addEventListener(`mouseover`, (e) => {
    e.preventDefault(); 
    document.querySelector(`#my-form`).style.background = `#888`;
});
btn.addEventListener(`mouseout`, (e) => {
    e.preventDefault(); 
    document.querySelector(`#my-form`).style.background = `#f4f6f6`;
});
*/



//Main Part


//Activities
const myForm = document.querySelector(`#my-form`);
const nameInput = document.querySelector(`#name`);
const emailInput = document.querySelector(`#email`);
const msg = document.querySelector(`.msg`);
const users = document.querySelector(`#users`);

//Look for a Submit Event
myForm.addEventListener(`submit`, onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    //console.log(nameInput.value);
    
    //for form validation
    if(nameInput.value === `` || emailInput.value === ``){
        //alert(`Enter value inside fields`);       //Because it looks ugly
        msg.innerHTML = `Please enter value inside fields`;
        msg.classList.add(`error`);
        
        setTimeout(() => msg.remove(), 3000);
    }
    else{
        const li = document.createElement(`li`);
        li.appendChild(document.createTextNode( `${nameInput.value} : ${emailInput.value}`));
        
        users.appendChild(li);
        
        //Clear the fields
        nameInput.value = ``;
        emailInput.value = ``;
    }
}