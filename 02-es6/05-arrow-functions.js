// function getNameFunc(firstName,lastName){
//     return `${firstName} ${lastName}`;
// }


// console.log(getNameFunc('Michael','Jackson'));

// let getNameArrowFunc = (firstName, lastName) => `${firstName} ${lastName}`;
// console.log(getNameArrowFunc('Michael','Jackson'));

// const calculateTax = (price) => {
//     const tax = 20;
//     return price * (1 + ( tax / 100));
// };

// function FinanceApp() { 
//     const referThisInArrowFuncFin = () => console.log('this', this);
//     console.log('FinanceApp');
//     referThisInArrowFuncFin();
// }

// console.log(calculateTax(100));


// FinanceApp();


const newArrowFunc = (a,b) => a + b;
const instanceOfArrowFunc = new newArrowFunc();
instanceOfArrowFunc();