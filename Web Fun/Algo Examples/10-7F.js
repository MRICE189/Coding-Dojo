/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

const str2 = "   hello    world     ";
const expected2 = "hello    world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 * 
 * while loop from both ends until it finds not a blank
 * loop through from the start and end adding to a new string
 * 
 */
function trim(str) {
    let leftCount=0;
    let rightCount=str.length-1;
    let newString = ""
    while (str[leftCount] === " " || str[rightCount] === " ") {
        if (str[leftCount] === " ") {
            leftCount++;
        }
        if (str[rightCount] === " ") {
            rightCount--;
        }
    }
    for (let i=leftCount; i<(rightCount+1); i++) {
        newString += str[i]
    }
    return newString
}

console.log(trim(str1))
console.log(trim(str2))

/*****************************************************************************/

/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const two_strA1 = "yes";
const two_strB1 = "eys";
const two_expected1 = true;

const two_strA2 = "yes";
const two_strB2 = "eYs";
const two_expected2 = true;

const two_strA3 = "no";
const two_strB3 = "noo";
const two_expected3 = false;

const two_strA4 = "silent";
const two_strB4 = "listen";
const two_expected4 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) {
    if (s1.length != s2.length) {
        return false
    }
    obj1 = {};
    obj2 = {};
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    for (let i=0; i<s1.length; i++) {
        if (obj1[s1[i]]) {
        obj1[s1[i]] += 1;
        }
        else {
            obj1[s1[i]] = 1;
        }
        if (obj2[s2[i]]) {
        obj2[s2[i]] += 1;
        }
        else {
            obj2[s2[i]] = 1;
        }
    }
    for (key in obj1) {
        if (obj1[key] != obj2[key]) {
            return false
        }
    }
    return true
}

console.log(isAnagram(two_strA1, two_strB1))
console.log(isAnagram(two_strA2, two_strB2))
console.log(isAnagram(two_strA3, two_strB3))
console.log(isAnagram(two_strA4, two_strB4))