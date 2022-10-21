/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.
  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5,];
const expected5 = [5, 1];
//  - order doesn't matter

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 * 
 * loop through array and create a dictionary/object and count the occurences of each int
 * loop through the object and set a mode variable
 * if the count > set that as the mode
 * if the count = add to the mode
 * 
 * if mode.length = array.length return []
 */
function mode(nums) {
    let mode = {}
    let modeCount = 0;
    let modeList = [];
    let sumKeys = 0;
    for (let i=0; i<nums.length; i++) {
        if (mode[nums[i]]) {
            mode[nums[i]] += 1
        }
        else {
            mode[nums[i]] = 1
        }
    }
    for (key in mode) {
        if (mode[key] > modeCount) {
            modeList = [parseInt(key)]
            modeCount = mode[key]
            sumKeys += mode[key]
        }
        else if (mode[key] == modeCount){
            modeList.push(parseInt(key))
            sumKeys += mode[key]
        }
    }
    if (sumKeys == nums.length && modeList.length != 1) {
        return []
    }
    else {
        return modeList
    }
}

console.log(mode(nums1))
console.log(mode(nums2))
console.log(mode(nums3))
console.log(mode(nums4))
console.log(mode(nums5))
console.log(mode([1,1,1,1,2,2,2,2,3,3,3]))