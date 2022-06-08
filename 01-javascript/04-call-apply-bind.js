var person1 = {firstName: 'Kadir', lastName: 'Dogan'};
var person2 = {firstName: 'Gerardo', lastName: 'Vitale'};

function say(greeting){
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

// say('helloooooo');

// say.call(person1, 'Hello');
// say.call(person2, 'Hello');

// say.apply(person1, ['Hello']);
// say.apply(person2, ['Hello']);


var sayHello2Kadir = say.bind(person1);
var sayHello2Gerardo = say.bind(person2);

sayHello2Kadir('Hello');
sayHello2Gerardo('Hello');

['a'].map()
