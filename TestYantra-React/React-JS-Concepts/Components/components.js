function Header(props) {
    // console.log("Props ", props)
    return React.createElement('h1', null, "This is Header")
}

function Footer(props) {
    //console.log("Props ", props)
    return React.createElement('h1', null, 'This is Footer')
}

function Content(props) {
    // console.log("Props ", props)
    return React.createElement('h1', null, "THis is Content")
}

const content = React.createElement(Content)
const footer = React.createElement(Footer)
const header = React.createElement(Header, {
    headerName: 'This is Header',
    id: 'header',
    show: true
}, 'Header Components')
const homePage = React.createElement('div', null, content, footer, header)
ReactDOM.render(homePage, document.getElementById('react-container'))