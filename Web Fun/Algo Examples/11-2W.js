/*
Given two arrays of ints
return the symmetric differences, (aka disjunctive union)
- these are the elements which are in either of the sets and not their intersection (the union without the intersection)
think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
- i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
Venn Diagram Visualization:
- https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
*/

const setA1 = [1, 2];
const setB1 = [2, 1];
const expected1 = [];
// Explanation: 1 and 2 are in both arrays so are excluded

const setA2 = [1, 2, 3];
const setB2 = [4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];
// Explanation: neither array has shared values, so all are included

const setA3 = [4, 1, 2, 3, 4];
const setB3 = [1, 2, 3, 5, 5];
const expected3 = [4, 5];
/* 
Explanation: 1, 2, and 3 are shared so are excluded
4 and 5 are included because they exist only in 1 array, but have duplicates, so only one copy of each is kept
*/

const setA4 = [];
const setB4 = [];
const expected4 = [];

const setA5 = [];
const setB5 = [1, 2, 3];
const expected5 = [1, 2, 3];

/**
 * Produces the symmetric differences, aka disjunctive union of two sets.
 * Venn Diagram Visualization:
 * @see https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
 * - Time: O(?).
 * - Space: O(?).
 * @param  {Array<number>} numsA
 * @param  {Array<number>} numsB
 *    Both given sets are multisets in any order (contain dupes).
 * @returns {Array<number>} The union of the given sets but excluding the shared
 *    values (union without intersection).
 *    i.e., if the element is in one array and NOT the other, it should be
 *    included in the return.
 */
// function symmetricDifferences(numsA, numsB) {
//     if (numsA.length === 0 || numsB.length === 0) {
//         return (!numsB.length) ? numsA : numsB
//     }
//     const arrA = [...new Set(numsA)]
//     const arrB = [...new Set(numsB)]
//     newArr = []
//     for (let i=0; i<arrA.length; i++) {
//         if (!arrB.includes(arrA[i])) {
//             newArr.push(arrA[i])
//         } 
//     }
//     for (let j=0; j<arrB.length; j++) {
//         if (!arrA.includes(arrB[j])) {
//             newArr.push(arrB[j])
//         } 
//     }
//     return newArr
// }

function symmetricDifferences(numsA, numsB) {
    if (numsA.length === 0 || numsB.length === 0) {
        return (!numsB.length) ? numsA : numsB
    }
    const newArr = []
    let longerArr = []
    numsA.length >= numsB.length ? longerArr = numsA : longerArr = numsB
    for (let i=0; i<longerArr.length; i++) {
        if (!numsB.includes(numsA[i]) && !newArr.includes(numsA[i]) && numsA[i]) {
            newArr.push(numsA[i])
        } 
        if (!numsA.includes(numsB[i]) && !newArr.includes(numsB[i]) && numsB[i]) {
            newArr.push(numsB[i])
        } 
    }
    return newArr
}
console.log(symmetricDifferences(setA1, setB1))
console.log(symmetricDifferences(setA2, setB2))
console.log(symmetricDifferences(setA3, setB3))
console.log(symmetricDifferences(setA4, setB4))
console.log(symmetricDifferences(setA5, setB5))

/*****************************************************************************/