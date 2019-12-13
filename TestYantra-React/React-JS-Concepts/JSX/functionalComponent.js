function Header(props){
    return <h1>This is Header</h1>
}

function Content(props){
    return <p>Welcome, {props.userName}</p>
}

function Foooter(props){
    return <h1>This is Footer</h1>
}

ReactDOM.render(<div><Header/><Content userName='Vishnu'/></div>,document.getElementById('react-container'))