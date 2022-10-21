/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 * 
 * 
 * iterate through string
 * create a variable to count '(' and ')'
 * if ) is ever > than ) return false
 * at end if ( != ) return false
 * else return true
 * 
 */
function parensValid(str) {
    let parens = { 'left': 0, 'right': 0}
    for (let i=0; i<str.length; i++) {
        if (str[i] == '(') {
            parens['left'] += 1
        }
        else if (str[i] == ')') {
            parens['right'] += 1;
        }
        if (parens['right'] > parens['left']) {
            return false
        }
    }
    if (parens['left'] != parens['right']) {
        return false;
    }
    return true;
}

console.log(parensValid(str1))
console.log(parensValid(str2))
console.log(parensValid(str3))
console.log(parensValid(str4))

/*****************************************************************************/

/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const two_str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const two_expected1 = true;

const two_str2 = "D(i{a}l[ t]o)n{e";
const two_expected2 = false;

const two_str3 = "A(1)s[O (n]0{t) 0}k";
const two_expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 * 
 * set var for most recently opened
 * loop through sting and count open/closed for each type
 * if most recently closed doesnt match opened return false
 * check to make sure openeds = closed for each type
 */

// function bracesValid(str) {
//     let brackets = { 'parensleft': 0, 'parensright': 0, 'squareleft':0, 'squareright':0, 'curlyleft':0, 'curlyright':0}
//     let recentOpen = "";
//     for (let i=0; i<str.length; i++) {
//         if (str[i] == '(') {
//             brackets['parensleft'] += 1;
//             recentOpen = '(';
//         }
//         else if (str[i] == ')') {
//             brackets['parensright'] += 1;
//             if (recentOpen != '(') {
//                 return false;
//             }
//         }
//         if (str[i] == '[') {
//             brackets['squareleft'] += 1;
//             recentOpen = '[';
//         }
//         else if (str[i] == ']') {
//             brackets['squareright'] += 1;
//             if (recentOpen != '[') {
//                 return false;
//             }
//         }
//         if (str[i] == '{') {
//             brackets['curlyleft'] += 1;
//             recentOpen = '{';
//         }
//         else if (str[i] == '}') {
//             brackets['curlyright'] += 1;
//             if (recentOpen != '{') {
//                 return false;
//             }
//         }
//     }
//     if (brackets['parensleft'] != brackets['parensright'] || brackets['squareleft'] != brackets['squareright'] || brackets['curlyleft'] != brackets['curlyright']) {
//         return false;
//     }
//     return true;
// }

function bracesValid(str) {
    const openingBraces = []
    const compliments = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    for (let i=0; i<str.length; i++) {
        if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
            openingBraces.push(str[i])
        }
        else if (str[i] === ")" || str[i] === "]" || str[i] === "}") {
            if (openingBraces.length === 0 || openingBraces.pop() !== compliments[str[i]]) {
                return false
            }
        }
    }
    return openingBraces.length > 0 ? false : true
}

console.log(bracesValid(two_str1))
console.log(bracesValid(two_str2))
console.log(bracesValid(two_str3))