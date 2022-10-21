/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 * 
 */
function reverseStr(str, i=0, newStr="") {
    //base
    if (i == str.length) {
        return newStr
    }
    newStr += str[str.length-i-1]
    return reverseStr(str, i+1, newStr)
}   

// console.log(reverseStr(str1))
// console.log(reverseStr(str2))
// console.log(reverseStr('abcdefg'))
// console.log(reverseStr('abcde fg'))

/*****************************************************************************/

/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const two_nums1 = [1, 3, 5, 6];
const two_searchNum1 = 4;
const two_expected1 = false;

const two_nums2 = [4, 5, 6, 8, 12];
const two_searchNum2 = 5;
const two_expected2 = true;

const two_nums3 = [3, 4, 6, 8, 12];
const two_searchNum3 = 3;
const two_expected3 = true;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */
function binarySearch(sortedNums, searchNum, pointer=(sortedNums.length/2)) {
    pointer = Math.floor(pointer)
    //baseline
    if (sortedNums[pointer-1] == searchNum || sortedNums[pointer] == searchNum || sortedNums[pointer + 1] == searchNum) {
        return true
    }
    if (pointer == 0 || pointer == sortedNums.length-1) {
        return false
    }
    //recursive function call
    if (sortedNums[pointer-1] >= searchNum) {   //going left
        pointer = Math.floor(pointer - (pointer/2))
        return binarySearch(sortedNums, searchNum, pointer)
    }
    else if (sortedNums[pointer-1] < searchNum) {  //going right
        pointer = pointer + Math.floor((pointer/2))
        return binarySearch(sortedNums, searchNum, pointer)
    }
    return 'not working'
}

console.log(binarySearch(two_nums1, two_searchNum1))
console.log(binarySearch(two_nums2, two_searchNum2))
console.log(binarySearch(two_nums3, two_searchNum3))