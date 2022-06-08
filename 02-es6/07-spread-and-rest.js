let addNumbersSpread = (x, y, z) => x + y + z;

const numbers = [1,2,3,5,6,7];

console.log(addNumbersSpread(...numbers));

let addNumberRest = (...numbers) => {
    let result = 0;
    numbers.forEach( num => result += num);
    return result;
}

console.log(addNumberRest(1,2,3,4));