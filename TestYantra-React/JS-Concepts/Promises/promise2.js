console.log('Js Started')

const myPromise = new Promise((resolve, reject) => {
    if (20 > 10) {
        const data = [100, 200, 300, 400]
        resolve(data)
            //or
            //resolve([100,200,300,400]) both are same
    } else {
        reject('Failed to fetch the data')
    }
})

myPromise.then(data => {
        console.log("data is ", data)
        const filterData = data.filter(val => val > 200)
        return filterData
    })
    .then(filteredData => {
        console.log("filteredData", filteredData)
    })
    .catch(error => {
        console.log("error is ", error)
    })

console.log('Js Ends')