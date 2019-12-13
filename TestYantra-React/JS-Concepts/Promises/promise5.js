const myPromise1 = new Promise(function(resolve, reject) {

    resolve([10, 20])
})

const myPromise2 = new Promise(function(resolve, reject) {

    resolve([10, 20, 30, 40])

})

Promise.race([myPromise1, myPromise2])
    .then(function(response) {
        console.log("response ", response)
    })
    .catch(function(error) {
        console.log("error ", error)
    })