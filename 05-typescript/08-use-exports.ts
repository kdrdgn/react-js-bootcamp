import DefaultZipCodeValidator, { Validator } from "./07-export";


const zipCodeValidator = new Validator();
const defaultZipCodeValidator = new DefaultZipCodeValidator();
console.log(zipCodeValidator.validate("N77EL"));
console.log(defaultZipCodeValidator.validate("16100"));