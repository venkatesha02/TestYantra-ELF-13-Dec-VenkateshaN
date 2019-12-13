const image = document.getElementById("image")
const image1 = document.getElementById("image1")
const image2 = document.getElementById("image2")

const div = document.createElement("div")
const image4 = document.createElement("img")
const image5 = document.createElement("img")

// onmouseover action performing
image.addEventListener("mouseover", function() {
    image1.src = "images/wallpapersden.com_avengers-end-game_wxl.jpg"
    image2.src = "images/winters-1919143__340.jpg"
})

// onmouseout action performing
image.addEventListener("mouseout", function() {
    image1.src = "images/siblings-817369__340.jpg"
    image2.src = "images/beautiful-2150881__340.jpg"
})

// onclick action performing
image.addEventListener("click", function() {

    image4.src = 'images/537b14ddc876df782795e7f2d6fd97c5.jpg'
    image5.src = 'images/b0c5111d462c979a144ff0011ebcef99.jpg'
    div.appendChild(image4)
    div.appendChild(image5)
    document.body.appendChild(div)


})