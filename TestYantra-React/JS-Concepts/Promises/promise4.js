const myPromise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("myPromise1 Excetued")
    }, 1000)
})

const myPromise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("myPromise2 Excetued")
    }, 1000)
})

Promise.race([myPromise1, myPromise2])
    .then(function(response) {
        console.log("response ", response)
    })
    .catch(function(error) {
        console.log("error ", error)
    })