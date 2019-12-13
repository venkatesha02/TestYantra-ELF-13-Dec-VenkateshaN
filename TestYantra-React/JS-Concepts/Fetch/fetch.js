function search() {
    let keyEle = document.getElementById('keys').value
    console.log(keyEle)

    let link = 'https://jsonplaceholder.typicode.com/todos/'
    let url = link.concat(keyEle)

    fetch(url)
        .then(response => response.json())
        .then(json => {

            for (let i = 0; i < json.length; i++) {

                const { userId, id, title, complete } = json


                //console.log(json[2].title)

                let div1 = document.createElement('div')
                let div2 = document.createElement('div')
                let div3 = document.createElement('div')
                let h5 = document.createElement('h5')
                let p1 = document.createElement('p')
                let p2 = document.createElement('p')
                let p3 = document.createElement('p')

                /* h5.textContent = 'User ID is: ', userId
                p1.textContent = 'Id : ', id
                p2.textContent = 'Title : ', title
                p3.textContent = 'Complete : ', complete */

                h5.textContent = 'User ID : ' + json[i].userId
                p1.textContent = 'Id : ' + json[i].id
                p2.textContent = 'Title : ' + json[i].title
                p3.textContent = 'Complite : ' + json[i].complete

                div1.classList = 'col-md-5 float-left'
                div2.classList = 'card'
                div3.classList = 'card-body'
                h5.classList = 'card-title'
                p1.classList = 'card-text'
                p2.classList = 'card-text'
                p3.classList = 'card-text'

                div1.appendChild(div2)
                div2.appendChild(div3)
                div3.appendChild(h5)
                div3.appendChild(p1)
                div3.appendChild(p2)
                div3.appendChild(p3)

                document.body.appendChild(div1)
            }
            // console.log(json)
        })


}