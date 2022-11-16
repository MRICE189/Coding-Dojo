/* 
Given by Riot games.
*/


const str1 = "b70a164c32a20c10j3a15";
const expected1 = "a199b70c42j3";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */

function isInt(value) {
    let x = parseInt(value);
    return !isNaN(value);
}

function rehash(s) {
    let tempLetter = "";
    let tempValue = "";
    let result = "";
    const resultHash = {}
    for (const digit of s) {
        if (!isInt(digit)) {
            if (resultHash[tempLetter]) {
                resultHash[tempLetter] += parseInt(tempValue)
                tempValue = "";
            } else {
                if (tempLetter != "") {
                    resultHash[tempLetter] = parseInt(tempValue)
                    tempValue = "";
                }
            }
            tempLetter = digit
        } else {
            tempValue += digit.toString()
        }
    }
    if (resultHash[tempLetter]) {
        resultHash[tempLetter] += parseInt(tempValue)
    } else {
        console.log(tempLetter, tempValue)
        resultHash[tempLetter] = parseInt(tempValue)
    }
    const keys = Object.keys(resultHash).sort((a, b) => a.localeCompare(b))
    for (let key of keys) {
        result += key + resultHash[key]
    }
    return result
}

console.log(rehash(str1))


function rehash(str) {
    const occurrences = {}
    let index = 0
    let result = ""

    while (index < str.length) {
        let currentLetter = str[index++]
        let currentCount = ""

        while (!isNaN(str[index])) {
            currentCount += str[index++]
        }

        occurrences[currentLetter]
            ? (occurrences[currentLetter] += parseInt(currentCount))
            : (occurrences[currentLetter] = parseInt(currentCount))
    }

    Object.keys(occurrences)
        .sort()
        .forEach((letter) => (result += letter + occurrences[letter]))

    return result
}

/*****************************************************************************/