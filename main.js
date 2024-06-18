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
