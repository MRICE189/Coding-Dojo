/* 
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */

function interleaveArrays(arr1, arr2) {
    let newArr = [];
    let iteratedArr = [];
    if (arr1.length >= arr2.length) {
        iteratedArr = arr1;
    }
    else {
        iteratedArr = arr2;
    }
    for (let i=0; i<iteratedArr.length; i++) {
        if (arr1[i] && arr2[i]) {
            newArr.push(arr1[i]);
            newArr.push(arr2[i]);
        }
        else {
            newArr.push(iteratedArr[i]);
        }
    }
    return newArr;
}

console.log(interleaveArrays(arrA1, arrB1))
console.log(interleaveArrays(arrA2, arrB2))
console.log(interleaveArrays(arrA3, arrB3))
console.log(interleaveArrays(arrA4, arrB4))

/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
  Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
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

// bonus, how many times does the search num appear?
const two_nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const two_searchNum4 = 2;
const two_expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 * 
 *  take arr.length and cut in half and floor
 *  set a pointer equal to that
 *  set a pointer at end
 *  compare left value of 1st of first pointer to see if it's =, <, >
 *  if num > pointer cut pointer in half again
 * 
 */
function binarySearch(sortedNums, searchNum) {
    let pointer = Math.floor(sortedNums.length / 2);
    let end = sortedNums.length - 1;
    while (pointer >= 0 && pointer < end) {
        if (sortedNums[pointer-1]  == searchNum || sortedNums[pointer+1] == searchNum) {
            return true
        }
        else if (sortedNums[pointer-1] > searchNum) {
            pointer = Math.floor(pointer/2)
        }
        else {
            pointer = Math.floor(pointer/2) + pointer
        } 
    }
    return false;
}

console.log(binarySearch(two_nums1, two_searchNum1))
console.log(binarySearch(two_nums2, two_searchNum2))
console.log(binarySearch(two_nums3, two_searchNum3))
console.log(binarySearch(two_nums4, two_searchNum4))
