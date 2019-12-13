class Header extends React.Component {
    render(){
        return <p>This is Headre</p>
    }
}

class Footer extends React.Component {
    render(){
        return <p>This is Footer</p>
    }
}

class Content extends React.Component {
    render(){
    return <p>Welcome, {this.props.userName}</p>
    }
}

ReactDOM.render(<div><Header/><Content  userName='Vishnu'/> <Footer/></div>,document.getElementById('react-container'))


