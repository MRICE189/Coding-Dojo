// /* 
//   String: Reverse
//   Given a string,
//   return a new string that is the given string reversed
// */

// const str1 = "creature";
// const expected1 = "erutaerc";

// const str2 = "dog";
// const expected2 = "god";

// const str3 = "hello";
// const expected3 = "olleh";

// const str4 = "";
// const expected4 = "";

// /**
//  * Reverses the given str.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str String to be reversed.
//  * @returns {string} The given str reversed.
//  * 
//  * - create a function that takes in a string
//  * - create a tempValue
//  * - iterate through the string starting at the end
//  *      - set tempValue to be tempValue + current char
//  * - return tempValue
//  */

// function reverseString(str) {}

/*****************************************************************************/

/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

const two_str1 = "object oriented programming";
const two_expected1 = "OOP";

// The 4 pillars of OOP
const two_str2 = "abstraction polymorphism inheritance encapsulation";
const two_expected2 = "APIE";

const two_str3 = "software development life cycle";
const two_expected3 = "SDLC";

// Bonus: ignore extra spaces
const two_str4 = "  global   information tracker    ";
const two_expected4 = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 * 
 * define new string var
 * define tempArray
 * 
 * iterate through the string and use an if statement to find blank space
 * if not a blank space, push to a temp string
 * if it is a blank space, push the whole temp string to the array outside of loop (to split words)
 * 
 * loop through the tempArray and take the index=i string index=0 values and add them to new string array
 * capitalize the entire string using .toUpper()
 * 
 */

function acronymize(str) {
    var capString = ""
    var stringArray = []
    var tempString = ""
    for (var i=0; i<str.length; i++) {
        if (str[i] != ' ') {
            tempString+=str[i];
        }
        else {
            stringArray.push(tempString);
            tempString = ""
        }
    }
    stringArray.push(tempString)
    for (var i=0; i<stringArray.length; i++) {
        capString += stringArray[i][0];
    }
    capString = capString.toUpperCase();
    return capString; 
}

var string = acronymize(two_str2);
console.log(string)