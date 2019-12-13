var items = [{
        id: 1,
        name: 'Lipstick',
        price: 850
    },
    {
        id: 2,
        name: 'Eyeliner',
        price: 500
    },
    {
        id: 3,
        name: 'Beard Oil',
        price: 900
    },
    {
        id: 4,
        name: 'Raki',
        price: 250
    }
]
for (const item of items) {

    console.log(item)

}
console.log("--------Filtering--------------")

var filter1 = items.filter(function(val) {
    if (val.price > 500) {
        return true;

    } else {
        return false
    }
})
console.log("Using Function ", filter1)
console.log("----------------------")

var filter2 = items.filter(val => val.price > 500)
console.log("Using Arrow Function ", filter2)

console.log("--------Mapping--------------")


var mapedArr = items.map(function(val) {
    var a = {
        id: val.id,
        name: val.name,
        price: val.price + 200
    }
    return a
})
console.log("Original ", items)
console.log("After modifiy using function ", mapedArr)

var mapedArr1 = items.map(val => {

    /*  var a = {
         id: val.id,
         name: val.name,
         price: val.price + 200
     }
     return a */

    /* var a = Object.create(null);
    a.id = val.id;
    a.name = val.name;
    a.price = val.price
    return a */

    var b = new Object();
    b.id = val.id
    b.name = val.name
    b.price = val.price
    return b


})

console.log("After GST using Arrow function ", mapedArr1)