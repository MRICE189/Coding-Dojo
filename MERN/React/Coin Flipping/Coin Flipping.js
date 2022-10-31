const tossCoin = () => {
    return (Math.random() > 0.5) ? "heads" : "tails";
}

const fiveHeads = new Promise( (resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
    while (headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped.`);
        if (result === 'heads') {
            headsCount++;
        } else {
            headsCount = 0;
        }
        if (headsCount === 5) {
            resolve(`${attempts} attempts.`)
        }
        else if (attempts > 99) {
            reject("Took 100 or more attempts");
        }
    }
});

fiveHeads
.then(res => console.log(res))
.catch(err => console.log(err));

console.log('first log')