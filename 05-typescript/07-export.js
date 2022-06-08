"use strict";
// Named Exports
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
var numberRegexp = /^[0-9]+$/;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    // Does something
    ZipCodeValidator.prototype.validate = function (zipCode) {
        return numberRegexp.test(zipCode);
    };
    return ZipCodeValidator;
}());
exports.Validator = ZipCodeValidator;
// Default Exports
var DefaultZipCodeValidator = /** @class */ (function (_super) {
    __extends(DefaultZipCodeValidator, _super);
    function DefaultZipCodeValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DefaultZipCodeValidator;
}(ZipCodeValidator));
exports.default = DefaultZipCodeValidator;
