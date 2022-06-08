"use strict";

function addJS(num1) {
  let num2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return num1 + num2;
}

console.log(addJS(2));
