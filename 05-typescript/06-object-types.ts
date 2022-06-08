// Anonymous
function greetAnonymous(person: { name: string; age: number }) {
  return "Hello " + person.name;
}

// Interface
interface Person {
  name: string;
  lastName: string;
}

// Type Alias
// type Person 


 
function greetInterface(person: Person) {
  return `${person.name} ${person.lastName}`;
}

greetInterface({name: 'Fallon', lastName: 'RiShiva'});

