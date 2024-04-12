// SCOPE KEY CONCEPTS
// GLOBAL SCOPE /  - refers to variables declared OUTSIDE a function body, available globally
// OUTER SCOPE  - when a function is declared at top level of JS file, its OUTER SCOPE is the GLOBAL SCOPE. When that function is invoked, it can access all all of the variables and functions declared in GLOBAL SCOPE.
// When invoked the function ceates a NEW SCOPE and RETAINS A REFERENCE TO THE OUTER SCOPE IN WHICH IT WAS DECLARED. Inside the new functions body, in addition to variables declared in that function, WE ALSO HAVE ACCESS TO VARIABLES AND FUNCTIONS DECLARED IN THE OUTER SCOPE.
// WHAT MATTERS IS WHERE THE FUNCTION IS DECLARED, NOT WHERE IT IS INVOKED.
// ALL VARIABLES and FUNCTIONS declared in outer scopes ARE AVAILABLE IN INNER SCOPES via the SCOPE CHAIN, applies to all nested functions. HOWEVER, it only goes in one direction, AN OUTER SCOPE CANNOT ACCESS THINGS DECLARED IN AN INNER SCOPE.

var customerName = 'bob'; //asked to use var

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase(); // changing the value stored in the variable to uppercase using toUpperCase() method
};
// return value is a variable whose value is a string 'not bob'
function setBestCustomer() {
    return bestCustomer = 'not bob'
};

// changed the value of bestCustomer. We coulod change it because did not use variable declaration (let, const, var) keyword to declare the variable in the above snippet, this means it is now in global scope and value can be changed, er below. DO NOT DO THIS IN REAL WORLD!!!
function overwriteBestCustomer() {
    return bestCustomer = 'maybe bob'
};

const leastFavoriteCustomer = 'mike';
function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = 'ted'
}








