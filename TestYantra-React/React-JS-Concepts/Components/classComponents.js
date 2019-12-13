class Header extends React.Component {
    constructor(props) {
        super(props)
        console.log("Props ", props)
    }

    render() {
        return React.createElement('h1', null, this.props.headerValue)
    }
}

class Footer extends React.Component {
    constructor(props) {
        super(props)
        console.log("Props ", props)
    }

    render() {
        return React.createElement('h1', null, "This is Footer")
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props)
        console.log("Props ", props)
    }

    render() {
        return React.createElement('h1', null, "This is Content")
    }
}

const header = React.createElement(Header, {
    headerValue: 'Hello'
})

const footer = React.createElement(Footer)

const content = React.createElement(Content)

const homePage = React.createElement('div', null, header, footer, content)

ReactDOM.render(homePage, document.getElementById('react-container'))