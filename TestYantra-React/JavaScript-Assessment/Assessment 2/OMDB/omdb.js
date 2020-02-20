function search() {
    let keyEle = document.getElementById('keys').value
        //console.log(keyEle)

    let link = `http://www.omdbapi.com/?s=${keyEle}&apikey=e47ef53a`

    //console.log(link)
    fetch(link)
        .then(response => response.json())
        .then(json => {

            //const { Title, Year, imdbID, Type, Poster } = json
            for (let i = 0; i < json.Search.length; i++) {
                // console.log(json.Search[i])
                
                let div1 = document.createElement('div')
                let div2 = document.createElement('div')
                let div3 = document.createElement('div')
                let img = document.createElement('img')
                let h5 = document.createElement('h5')
                let p1 = document.createElement('p')
                let p2 = document.createElement('p')
                let p3 = document.createElement('p')
                
                img.src = json.Search[i].Poster
                h5.textContent = 'Title : ' + json.Search[i].Title
                p1.textContent = "Year : " + json.Search[i].Year
                p2.textContent = 'IMDB ID : ' + json.Search[i].imdbID
                p3.textContent = 'Type: ' + json.Search[i].Type
                
                div1.classList = 'col-md-3 float-left'
                div2.classList = 'card'
                div3.classList = 'card-body'
                h5.classList = 'card-title'
                p1.classList = 'card-text'
                p2.classList = 'card-text'
                p3.classList = 'card-text'
                
                div1.innerHTML=''
                div1.appendChild(div2)
                div2.appendChild(div3)
                div3.appendChild(img)
                div3.appendChild(h5)
                div3.appendChild(p1)
                div3.appendChild(p2)
                div3.appendChild(p3)

                document.body.appendChild(div1)
            }
            // console.log(json)
        })
}