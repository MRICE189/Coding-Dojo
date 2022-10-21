/* 
Recursively find the lowest common multiple between two numbers
"A common multiple is a number that is a multiple of two or more integers. 
The common multiples of 3 and 4 are 0, 12, 24, .... 
The least common multiple (LCM) of two numbers is the smallest
number (not zero) that is a multiple of both."

Try writing two columns of multiples as a starting point:
starting with 15 and 25 and keep writing their multiples until you find the
lowest common one then turn this in to a step by step instruction
15 25
30 50
45 75
60 
75
75 is the first common
*/

const num1A = 1;
const num1B = 1;
const expected1 = 1;

const num2A = 5;
const num2B = 10;
const expected2 = 10;

const num3A = 10;
const num3B = 5;
const expected3 = 10;

const num4A = 6;
const num4B = 8;
const expected4 = 24;

const num5A = 15;  .6
const num5B = 25;  1
const expected5 = 75;

/**
 * Add params if needed for recursion
 * Finds the lowest common multiple of the two given ints.
 * @param {number} a
 * @param {number} b
 * @returns {number} The lowest common multiple of the given ints.
 */
function lowestCommonMultiple(a, b, aMultiple=a, bMultiple=b) {
    if(aMultiple === bMultiple) {
        return aMultiple;
    }
    if (aMultiple > bMultiple) {
        bMultiple += b
        return lowestCommonMultiple(a, b, aMultiple, bMultiple)
    }
    else if (bMultiple > aMultiple) {
        aMultiple += a
        return lowestCommonMultiple(a, b, aMultiple, bMultiple)
    }
}

/*****************************************************************************/

/* 
Binary String Expansion
You are given a STRING containing chars "0", "1", and "?"
For every "?" character, either "0" or "1" can be substituted.
Write a recursive function to return array of all valid strings with "?" chars expanded to "0" or "1". 
*/

const two_str1 = "1?0?";
const two_expected1 = ["1000", "1001", "1100", "1101"];
// output list order does not matter

/**
 * Add params if needed for recursion
 * Expands a string such that each "?" in the given string will be replaced
 * with a "0" and a "1".
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string containing to expand.
 * @returns {Array<string>} The expanded versions of the given string.
 */
function binaryStringExpansion(str, solution=[], partial="") {
    const index = str.indexOf("?")
    
    if (index < 0) {
        solution.push(partial+str);
    }
    else {
        let front = str.slice(0, index);
        let back = str.slice(index + 1)
        let prefix = partial + front
        console.log(front, back, prefix)
        binaryStringExpansion(back, solution, prefix + "0")
        binaryStringExpansion(back, solution, prefix + "1")
    }
    return solution;
}

console.log(binaryStringExpansion(two_str1))