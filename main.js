//Person object
const person = {
    name: 'Nana',
    age: '25',
    greet: function(){
        console.log(`Hello my name is ${this.name}, and I'm ${this.age} years old.`)
    }
}
person.greet();

//Object with new values
let somePerson = {
    name: 'Johnny',
    age: 35,
}

//call()
person.greet.call(somePerson);

//apply()
//Takes in arguments as arrays
let args = [this.name, this.age]
person.greet.apply(somePerson, args);

//bind()
let boundGreet = person.greet.bind(somePerson);
boundGreet();

/*
//Event handlers and this:
const btn = document.getElementById('btn');

function handleClick() {
    console.log(this.id);
    console.log(this.textContent);
}
handleClick.call(btn);

btn.addEventListener('click', handleClick);
*/


//Using arrow functions for handleClick()
const handleClick = (event) => {
    console.log(event.target.id);
    console.log(event.target.textContent);
}

btn.addEventListener('click', handleClick);



