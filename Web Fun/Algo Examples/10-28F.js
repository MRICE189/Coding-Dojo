/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.

  Output: only the shared values between the two arrays (deduped).

  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

/**
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */

function orderedIntersection(sortedA, sortedB) {
    let newArr = []
    const arrA = [...new Set(sortedA)]
    const arrB = [...new Set(sortedB)]
    const count = {};
    for (let i=0; i<arrA.length; i++) {
        (!count[arrA[i]]) ? count[arrA[i]] = 1 : count[arrA[i]]++;
    }
    for (let j=0; j<arrB.length; j++) {
        (!count[arrB[j]]) ? count[arrB[j]] = 1 : count[arrB[j]]++;
    }
    for (key in count) {
        if (count[key] > 1) {
            newArr.push(parseInt(key))
        }
    }
    return newArr;
}

//OR

function orderedIntersection(sortedA, sortedB) {
    let newArr = []
    const arrA = [...new Set(sortedA)]
    for (let i=0; i<arrA.length; i++) {
        if (sortedB.includes(arrA[i])) {
            newArr.push(arrA[i])
        }
    }
    return newArr;
}


const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

console.log(orderedIntersection(numsA1, numsB1))
console.log(orderedIntersection(numsA2, numsB2))
console.log(orderedIntersection(numsA3, numsB3))
/*****************************************************************************/