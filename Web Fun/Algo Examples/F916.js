function arrayDivision(array, divisor) {
    var newArray = [];
    for (var i=0; i<array.length; i++) {
        if (array[i] % divisor === 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(arrayDivision([7,8,3,6,2,21,4,12], 3));
