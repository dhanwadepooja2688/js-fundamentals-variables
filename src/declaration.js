//
//
//
// TODO: 1. Declare the variables firstName and age so that the tests pass
<<<<<<< HEAD
const firstName = "Jane" 
const age = 35
=======
const firstName = 'Jane'
const age = 35

console.log(firstName)
>>>>>>> 8a406f4ae39e51febe7cb014f324b9334260ee9e

// do not edit below this line
let firstNameExport = ''
try {
  /* eslint-disable no-undef */
  firstNameExport = firstName
} catch (e) {}

let ageExport = 0
try {
  /* eslint-disable no-undef */
  ageExport = age
} catch (e) {}

module.exports = {
  firstName: firstNameExport,
  age: ageExport
}
