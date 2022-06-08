"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _07_export_1 = require("./07-export");
var zipCodeValidator = new _07_export_1.Validator();
var defaultZipCodeValidator = new _07_export_1.default();
console.log(zipCodeValidator.validate("N77EL"));
console.log(defaultZipCodeValidator.validate("16100"));
