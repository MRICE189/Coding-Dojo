// Print odds 1-20

for (i=1; i<=20; i+=2) {
    console.log(i)
}

// Decreasing multiples of 3 (100 -> 0)

for (i=100; i>=0; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

// Print 4, 2.5, 1, -0.5, -2, -3.5

for (i=4; i>= -3.5; i-=1.5) {
    console.log(i);
}

// Add values from 1-100 and console.log sum

sum = 0;
for (i=1; i<=100; i++) {
    sum += i;
}
console.log(sum);

// Multiply values from 1-12 console.log produce

product = 1;
for (i=1; i<=12; i++) {
    product *= i;
}
console.log(product);