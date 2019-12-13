const items = React.createElement('ul', { id: 'hot drinks' },
    React.createElement('li', { id: 'coffe' }, 'Coffe'),
    React.createElement('li', { id: 'tea' }, 'tea'))

const mobiles = ['Oppo', 'Honor', 'Samsung', 'Nokia', 'Lenovo', 'Oppo', 'RedMi']

const mobileList = React.createElement('ol', null,
    mobiles.map((mobiles, index) => {
        return React.createElement('li', { key: `${mobiles}${index}` }, mobiles)
    }))

console.log("Items ", items)

const allItems = React.createElement('div', null, items, mobileList)

ReactDOM.render(allItems, document.getElementById("react-container"))
    //ReactDOM.render(items, document.getElementById("react-container"))