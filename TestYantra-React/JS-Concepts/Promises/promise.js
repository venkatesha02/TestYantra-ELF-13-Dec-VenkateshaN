console.log('Js Starts')


const myPromise = new Promise(function(resolve, reject) {
    if (20 > 10) {
        resolve('20 is greater then 10')
    } else {
        reject('20 is not greater then 10')
    }
})

myPromise.then(function(success) {
    console.log('Success ', success)
}).catch(function(error) {
    console.log('Error ', error)
})

console.log('Js Ends')