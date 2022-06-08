let myName = 'Olha';
let myRole = 'Software Developer';

function myTag(arr, name, role){
 let str0 = arr[0]; // My name is
 let str1 = arr[1]; // and I am
 
 // we can further manipulate str0, str1, name and role here
 return `${str0}${name}${str1}${role}`;
}
console.log(myTag`My name is ${myName} and I am ${myRole}`);