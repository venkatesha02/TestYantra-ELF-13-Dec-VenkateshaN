class Welcome extends React.Component {

    state = {
        name: 'Venki',
        show: false
    }
    constructor(props) {
        super(props)
        console.log("Inside Constructor ", this);

    }

    // best way of writting function
    handleClick = () => {

        console.log("Inside Handle CLick, ", this);

        console.log("Inside arrow function ,", this.state.name);
        // Never ever mutated state directly
        //this.state.name='Shibhu'
        this.setState({
            name: 'Shibu'
        })

    }
    render() {
        console.log("Inside render ", this)
        return (
            <div>
                <h1>Hello, {this.state.name}</h1>
                <button onClick={this.handleClick}>Click here to change the Name</button>
            </div>
        )
    }
}

ReactDOM.render(<Welcome />, document.getElementById('react-container'))