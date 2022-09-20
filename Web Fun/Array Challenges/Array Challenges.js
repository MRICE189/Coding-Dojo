// 1. Always Hungry

function alwaysHungry(arr) {
    var hungry = true;
    for (var i=0; i<arr.length; i++) {
        if (arr[i] == "food") {
            hungry = false;
            console.log("yummy");
        }
    }
    if (hungry) {
        console.log("I'm hungry!");
    }
}

alwaysHungry([3,4,5]);

// 2. High Pass Filter

function highPass(arr, cutoff) {
    var filterArr = [];
    for (i=0; i<arr.length; i++) {
        if (arr[i] > cutoff) {
        filterArr.push(arr[i]);
        }
    }
    return filterArr;
}

var result = highPass([6,8,3,10,-2,5,9], 5);
console.log(result);

// 3. Better than Average

function betterThanAvg(arr) {
    var sum = 0;
    for (var i=0; i<arr.length; i++) {
        sum+=arr[i];
    }
    var avg = sum/arr.length;
    var count = 0;
    for (var i=0; i<arr.length; i++) {
        if (arr[i]>avg) {
            count++;
        }
    }
    return count;
}

var result = betterThanAvg([6,8,3,10,-2,5,9]);
console.log(result);

// 4. Array Reverse

function arrayReverse(arr) {
    var temp = null;
    for (var i=0; i<arr.length/2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - (1+i)];
        arr[arr.length - (1+i)] = temp;
    }
    return arr;
}

var result = arrayReverse(["a","b","c","d","e"]);
console.log(result);

// 5. Fibonacci Array

function fibonacciArray(n) {
    var fibArr = [0,1];
    for (var i=1; i<n-1; i++) {
        fibArr.push(fibArr[i] + fibArr[(i-1)]);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result);