// #!/usr/bin/env node

'use strict';

const { filter, reduce, map, indexOf } = require('lodash');
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
 * I: The function receives an array of objects.
 * O: The function returns a string representing the 'name' of the object with the
 *    smallest 'age' property value in the <array>.
 * C: Must use reduce() method.
 * E: N/A
 */

var youngestCustomer = (array) => {
    /* Initialize youngestCustomer variable with the value from reducing the array down 
       to the youngest customer. */
    let youngestCustomer = reduce(array, (prev, next) => {
        // Check if prev.age < next.age
        if (prev.age > next.age) {
            // Reassign prev to next
            prev = next;
        }
        // Return prev
        return prev;
    });
    // Return youngestCustomer.name to get a string value of the youngest customer's name
    return youngestCustomer.name;
};

/**
 * I: The function receives an array of objects.
 * O: The fucntion returns a number representing the average balance from all of
 *    objects' 'balance' property values in the input <array>.
 * C: Must use reduce() method.
 * E: N/A
 */

var averageBalance = (array) => {
    /* Initialize totalBalance variable with the value from reducing the array down
       to the sum of each object's balance property value; Seed: 0 */
    let totalBalance = reduce(array, (total, cust) => {
        // To turn the balance into a number:
            // Replace all '$' & ',' with nothing ('')
            // Use parseFloat to turn the string into a number after replacement of characters
        // Reassign total after adding cust.balance turned into a number
        total += parseFloat(cust.balance.replaceAll('$', '').replaceAll(',',''));
        // Return total
        return total;
    }, 0);
    // Return the average of the totalBalance by dividing by array.length
    return (totalBalance / array.length);
};

/**
 * I: The function receives an array of objects and a string representing a single
 *    character.
 * O: The function returns a number representing how many customer objects in the
 *    input array have name a property that begins with a given input letter.
 * C: Must use reduce() method.
 * E: N/A
 */

var firstLetterCount = (array, letter) => {
    /* Return the number from reducing input array while counting all objects with 
       name property value that begins with input letter. Force to lowercase. */
    return reduce(array, (prev, current) => {
        /* Check if the first character of current.name force to lowercase is strictly 
           equal to target letter forced to lower case. */
        if (current.name.charAt(0).toLowerCase() === letter.toLowerCase()) {
            // If true, reassign prev after adding 1
            prev += 1;
        }
        // Return prev
        return prev;
    }, 0);
};

/**
 * I: The function receives an array, name property value, and a target letter.
 * O: The function returns a number representing the number of friends a target
 *    customer with the input name property value from the input array that start
 *    with the input target letter.
 * C: N/A
 * E: N/A
 */

var friendFirstLetterCount = (array, customer, letter) => {
    // Iterate through array using for loop
    for (let i = 0; i < array.length; i++) {
        // Check if array[i].name === customer
        if (array[i].name === customer) {
            // Count the number of friends' names in array[i] starting with input letter
            // Use firstLetterCount() function by passing in array[i].friends and letter
            // Return this value
            return firstLetterCount(array[i].friends, letter);
        }
    }
};

/**
 * I: The function receives an array of objects and a name string.
 * O: The function returns an array of customers' names that have the given input 
 *    name string in their friends list.
 * C: Use the filter() and map() methods.
 * E: N/A
 */

var friendsCount = (array, target) => {
    /* Filter array for all objects in array that contain target name in the object's
       friend array and initialize customers variable with this array */
    let customers = filter(array, (customer) => {
        // Iterate through customer.friends array
        for (let i = 0; i < customer.friends.length; i++) {
            // Check if a friend in customer.friends array contains target name
            if (customer.friends[i].name === target) {
                // If true, return true
                return true;
            }
        }
        // Otherwise, return false
        return false;
    });
    /* Return the array from mapping all of the names from each object in the 
       customers array */
    return map(customers, (obj) => obj.name);
};

/**
 * I: The function receieves an array of objects.
 * O: The function returns an array of the three most common tags among all 
 *    customers' associated tags.
 * C: N/A
 * E: N/A
 */

var topThreeTags = (array) => {
    // Initialize tagCount variable with an empty array
    let tagCount = [];
    /* Initiialize bigTagArray variable with the value from reducing array to
       an array of all tags in each array assigned to each object in input array */
    let bigTagArray = _.reduce(array, (prev, customer) => {
        prev = [...prev, ...customer.tags];
        return prev;
    }, []);
    /* Initialize uniqueTags variable with the value from invoking the unique() function
       on the bigTagArray */
    let uniqueTags = _.unique(bigTagArray);
    // Iterate through uniqueTags array using a for loop
    for (let i = 0; i < uniqueTags.length; i++) {
        // Push an object into tagCount containing to properties:
            // name: uniqueTags[i]
            // number: Reduce bigTagArray to the number of uniquetags[i] in it
        tagCount.push({name: uniqueTags[i],
            number: _.reduce(bigTagArray, (prev, current) => {
            if (current === uniqueTags[i]) {
                prev += 1;
            }
            return prev;
        }, 0)})
    }
    /* Initialize number1 with the reduction of tagCount down to an object with the
       highest number property value */
    let number1 = _.reduce(tagCount, (prev, current) => {
        if (prev.number < current.number) {
            prev = current;
        }
        return prev;
    });
    /* Initialize number2 with the reduction of tagCount down to an object with the
       highest number property value while ignoring number1 object */
    let number2 = _.reduce(tagCount, (prev, current) => {
            if (prev.number < current.number && prev.name !== number1.name && current.name !== number1.name) {
                prev = current;
            }
            return prev;
        });
    /* Initialize number2 with the reduction of tagCount down to an object with the
       highest number property value while ignoring number1 & number2 object */
    let number3 = _.reduce(tagCount, (prev, current) => {
            if (prev.number < current.number && prev.name !== number1.name && prev.name !== number2.name && current.name !== number1.name && current.name !== number2.name) {
                prev = current;
            }
            return prev;
        });
    // Return a sorted array of the name property from number1, number2, and number3.
    return [number1.name, number2.name, number3.name].sort(); 
};

/**
 * I: The function receives an array of objects.
 * O: The function returns
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
