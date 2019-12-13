const myPromise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("myPromise1 Excetued")
    }, 4000)
})

const myPromise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("myPromise2 Excetued")
    }, 1000)
})

const myPromise3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject("myPromise3 Rejected")
    }, 1000)
})

Promise.all([myPromise1, myPromise2, myPromise3])
    .then(function(response) {
        console.log("Response ", response)
    }).catch(function(error) {
        console.log(error)
    })