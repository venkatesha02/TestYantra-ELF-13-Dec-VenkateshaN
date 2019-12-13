var hobbies = ['Football', 'Badmiton', 'Cooking', 'Singing', 'Travelling']
hobbies.push('Reading', 'Coding')
console.log("Hobbies are ", hobbies)
console.log('----------------------------')

hobbies.pop();
console.log('Hobbies after pop ', hobbies)

console.log('----------------------------')
hobbies.unshift('SLeeping', 'Bird watching')
console.log("Hobbies are ", hobbies);

console.log('----------------------------')

hobbies.shift();
console.log("Hobbies after shift ", hobbies)

var isHobbies = Array.isArray(hobbies)
console.log("Is Hobbies array ", isHobbies);

console.log('----------------------')
var hasCooking = hobbies.includes("Cooking")
console.log("has Cooking ", hasCooking)

console.log('----------------')

var indexBadmiton = hobbies.indexOf("Badmiton", 3)
console.log('Index of Badmiton ', indexBadmiton)

console.log('----------------')
var seperator = hobbies.join('   =   ')
console.log("the String is ", seperator)

console.log('----------------')
var brands = ['Signature', 'Bislari', 'Kingfisher', 'Kinly']
brands.splice(1, 1, 'Ibbani')
brands.splice()
brands.splice(1)

console.log("brands after splice ", brands)

console.log('----------------')

var movies = ['Bangarada Manushya', 'Bhoo Kailasam', 'Mother India', 'Balan', 'Indian']
var sliceMovies = movies.slice(1, 3)

console.log("After splice ", sliceMovies)

var originalArray = ['Bangarada Manushya', 'Bhoo Kailasam', 'Mother India', 'Balan', 'Indian']
var newtwo = originalArray.slice(0)
var newone = newtwo.splice(2, 0, "LineKing")
console.log(originalArray)
console.log(newtwo)