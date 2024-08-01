// #!/usr/bin/env node

'use strict';

const { filter, reduce } = require('lodash');
var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

/**
 * I: The function receives an array of objects.
 * O: The function returns a number representing the number of objects with a 'gender'
 *    property value of 'male'.
 * C: Must use filter() method.
 * E: N/A
 */

var maleCount = function(array) {
    /* Filter through array and find all objects with the value 'male' assigned to 
       its gender property and return the length of the resulting array. */
    return filter(array, customer => customer.gender === 'male').length;
};

/**
 * I: The function receives an array.
 * O: The function returns a number representing the number of objects with a 'gender'
 *    property value of 'female'.
 * C: Must use reduce() method.
 * E: N/A
 */

var femaleCount = function(array) {
    /* Reduce the array down to the number of objects with 'female' assigned to 
       the gender property; Seed: 0 */
    let numFemales = reduce(array, (prev, customer) => {
        // Check if customer (object) has 'female' assigned to gender
        if (customer.gender === 'female') {
            // Reassign prev value after adding 1
            prev += 1;
        }
        // Return prev
        return prev;
    // Seed value: 0
    }, 0);
    // Return numFemales
    return numFemales;
};

/**
 * I: The function receives an array of objects.
 * O: The function returns a string representing the 'name' of the object with the
 *    largest 'age' property value in the <array>.
 * C: Must use reduce() method.
 * E: N/A
 */

var oldestCustomer = (array) => {
    /* Initialize oldestCust variable with the value from reducing the array down 
       to the oldest customer. */
    let oldestCust = reduce(array, (prev, customer) => {
        // Check if prev.age < customer.age
        if (prev.age < customer.age) {
            // If true, reassign prev to customer
            prev = customer;
        }
        // Return prev
        return prev;
    });
    // Return oldestCust.name to yield the name of the oldest customer
    return oldestCust.name;
};

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

var youngestCustomer;

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

var averageBalance;

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

var firstLetterCount;

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

var friendFirstLetterCount;

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

var friendsCount;

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

var topThreeTags;

/**
 * I: 
 * O: 
 * C: 
 * E: 
 */

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
