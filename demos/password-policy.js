
var util = require('util');

const PasswordPolicy = require('password-sheriff').PasswordPolicy;
const charsets = require('password-sheriff').charsets;

const policy = new PasswordPolicy({
    length: {
        minLength: 10
    },
    contains: {
        expressions: [charsets.upperCase, charsets.numbers]
    }
});


const explained = policy.explain();

const lengthExplained = explained[0];
const charsExplained = explained[1];


var passwords = [
    'password',
    'password1',
    'Password1',
    'Password10',
    'password10'
];


passwords.forEach(function(password) {

    if (!policy.check(password)) {
        console.log('\nPassword ' + password + ' is not a valid password');

        const missing = policy.missing({}, password);

        console.log(missing.rules.map(generateErrorMessage));
    }
    else {
        console.log('Password ' + password + ' IS VALID!');
    }

});



function generateErrorMessage(error) {
    if (error.code === 'lengthAtLeast') {
        return util.format(error.message, error.format[0]);
    }
    else if (error.code === "shouldContain") {
        return error.message + " " + error.items
                                        .filter(function(item) {return !item.verified})
                                        .map(function(item) {return item.message})
                                        .join(", ");
    }
}
