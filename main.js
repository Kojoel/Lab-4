/////////////// Object Methods and this:
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
/////////////// 2. Event handlers and this:
const btn = document.getElementById('btn');

function handleClick() {
    console.log(this.id);
    console.log(this.textContent);
}
handleClick.call(btn);

btn.addEventListener('click', handleClick);
*/


//Using arrow functions for handleClick()
const handleClick = () => {
    const errorDiv = document.querySelector('.error-div');
    const pthisId = document.querySelector('#thisId');
    const pthisTc = document.querySelector('#thisTextContent');
    const errorReason = document.querySelector('#errorReason');
    pthisId.textContent = toString(this.id);
    pthisTc.textContent = toString(this.textContent);
    errorReason.textContent = `The output generated for 'this.id' and 'this.textContent' is
    undefined. This is because the arrow function in javascript does not
    possess its own this context. The arrow functions inherit 'this' from thier
    surrounding lexical context when they are defined. `;
    
}

btn.addEventListener('click', handleClick);
/*  The output generated for 'this.id' and 'this.textContent' is
    undefined. This is because the arrow function in javascript does not
    possess its own this context. The arrow functions inherit 'this' from thier
    surrounding lexical context when they are defined. 
*/


///////////////// 3. Private Data with Closure and this:
function createCounter() {

    return {
        count: 0,

        increment: function(){
            this.count += 1;
            console.log(this.count);
        },
        getCount: function(){
            return this.count;
        }
    }
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount());


/////////////// 4. Reusable Component with Closure and this
const container = document.querySelector('.container');
startCountBtn = document.querySelector('#start-count');


const Timer = {
    createTimer: function(duration,elementId) {
        userInput = document.querySelector('#user-input');
        
        
        duration = userInput.value;
        this.timeLeft = duration;


        const element = document.getElementById(elementId);

        const countDown = () => {
            if(this.timeLeft >= 0) {
                element.textContent = this.timeLeft;
                this.timeLeft--;
            }
            else{
                clearInterval(this.timeInterval);
            }
        };

        countDown();
        this.timeInterval = setInterval(countDown, 1000);

        return countDown;
    }
}

startCountBtn.addEventListener('click', ()=> {
    Timer.createTimer(10, 'timer');
})


