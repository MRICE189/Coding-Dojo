// array is Palindrome -- determine if an array is a palindrome or not
// i.e.  [1, 2, 3, 4, 3, 2, 1]
// if we reversed the array, would the same elements be in the same order?
// return true if the array functions as a palindrome and false otherwise

function arrayIsPaldindrome(array) {
    for (var i=0; i<array.length; i++) {
        if (array[i] != array[array.length-(1+i)]) {
            return false;
        }
    }
    return true;
}

console.log(arrayIsPaldindrome(['apple', 'orange', 'apple']));
