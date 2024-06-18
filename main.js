person = {
    name: 'Nana',
    age: '25',
    greet: function(){
        console.log(`Hello my name is ${this.name}, and I'm ${this.age} years old.`)
    }
}

person.greet();