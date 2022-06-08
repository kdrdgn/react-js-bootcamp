function greet(greetingMessage) {
    return function(name) {
        console.log(greetingMessage + ' ' + name);
    }
}

var sayHi = greet('Hello');
sayHi('Anna');