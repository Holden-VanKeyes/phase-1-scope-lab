// leastFavoriteCustomer and changeLeastFavoriteCustomer():
// Now declare a constant (using the const keyword) in global scope called leastFavoriteCustomer;
// be sure to assign it some initial value.
// Finally, write a function called changeLeastFavoriteCustomer()
// that attempts to change that constant -
// notice what JavaScript does when you try to change the constant.

var customerName = 'bob'
//const upperCaseCustomerName = (customerName) => customerName.toUpperCase()
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
}
var bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'
  return bestCustomer
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
  return bestCustomer
}
const leastFavoriteCustomer = 'yo'
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'sam'
}

// var bestCustomer = function () {
//   var setBestCustomer = 'not bob'
//   return setBestCustomer
// }

// function setBestCustomer() {
//   var bestCustomer = customerName
//   return 'not', bestCustomer
// }
