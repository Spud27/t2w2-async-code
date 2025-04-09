console.log('Async')

// resolve and reject are callback functions
// parsed in by the promise constructor
const firstPromise = new Promise((resolve, reject) => {
    // call resolve() anywhere to resolve the promise
    // or, call reject() to reject the promise
    // either one acts like a return - it will exit the function
    resolve('Hello')
})

console.log('Promise initiated')


// Main
firstPromise.then(result => {
    console.log(`Promise result: ${result}`)
// catch is called if the promise rejects
}).catch(err => {
    console.log(err)
})

console.log('End of Line')
