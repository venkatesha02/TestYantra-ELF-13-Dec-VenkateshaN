/* const items = React.createElement('ul', { id: 'hot drinks' },
    React.createElement('li', { id: 'coffe' }, 'Coffe'),
    React.createElement('li', { id: 'tea' }, 'tea'))


const table = React.createElement('table', null,
    React.createElement('thead', null,
        React.createElement('th', null, 'Name'),
        React.createElement('th', null, 'Phone Number')),
    React.createElement('tbody', null,
        React.createElement('td', null, 'Raju'),
        React.createElement('td', null, '8785424542')))

const div = React.createElement('div', null, items, table)
ReactDOM.render(div, document.getElementById("react-container")) */

const data = [{
        name: 'Raju',
        phn: 895642123
    },
    {
        name: 'Ria',
        phn: 789546321
    },
    {
        name: 'Joo',
        phn: 3256987451
    }
]

const datasList = React.createElement('table', { className: 'tableBorder' },
    React.createElement('thead', { className: 'thead' },
        React.createElement('th', null, 'Name'),
        React.createElement('th', null, 'Phone Number')),
    data.map((data, index) => {
        return React.createElement('tbody', { className: 'tbody' },
            React.createElement('tr', { id: `${data.phn}` },
                React.createElement('td', null, data.name),
                React.createElement('td', null, data.phn)))
    })

)

const items = React.createElement('ul', { id: 'hot drinks' },
    React.createElement('li', { id: 'coffe' }, 'Coffe'),
    React.createElement('li', { id: 'tea' }, 'tea'))

const div = React.createElement('div', null, datasList, items)
ReactDOM.render(div, document.getElementById("react-container"))