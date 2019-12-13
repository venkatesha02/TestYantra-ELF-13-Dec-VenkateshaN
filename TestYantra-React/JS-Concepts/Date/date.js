// var todayDate = new Date()
// console.log("Today Date ", todayDate)

// var date = todayDate.getDate();
// var month = todayDate.getMonth() + 1
// var day = todayDate.getDay() + 1
// var year = todayDate.getFullYear();

// var displayDate = date + '/' + month + "/" + year;

// console.log("Display date ", displayDate)

// var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
// var m = todayDate.getMonth()
// var m1 = months[m]
// console.log("Month ", m1)

// var Days = ['Sunday', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
// var d = todayDate.getDay();
// var d1 = Days[d]
// console.log("Days are ", d1)

var dateM = new Date(0)
console.log('Date with Milliseconds constructor', dateM)

var dateS = new Date("October 21 1990")
console.log("Date with String ", dateS)

var dateY = new Date(1990, 12, )
console.log("Date with year ", dateY)