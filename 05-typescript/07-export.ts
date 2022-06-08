// Named Exports

const numberRegexp = /^[0-9]+$/;

class ZipCodeValidator {
    // Does something
    validate(zipCode: string) {
        return numberRegexp.test(zipCode)
    }
}
export {ZipCodeValidator as Validator}


// Default Exports
export default class DefaultZipCodeValidator extends ZipCodeValidator{
    //Does something
}

