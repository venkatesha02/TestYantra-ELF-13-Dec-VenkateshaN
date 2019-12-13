class Welcome extends React.Component {

    state = {
        name: 'Venki'
    }
    constructor(props) {
        super(props)
        console.log(this);
        this.showMessage = this.showMessage.bind(this)
        //this.showMessage = this.showMessage.bind(this)
        //if you  want  asscess to the state property
    }
    greet(){
        console.log("Hello ",this.state.name);
        
    }
    showMessage(){
        console.log("Binding In constructor ",this.state.name);
       // console.log("Binding In constructor ",this.state.name); if you want to accesss state property 
            // bind it with bind method
        
    }
    // best way of writting function
    handleClick = ()=>{
        console.log("Inside arrow function ,",this.state.name);
        

    }
    render() {        
        return (
            <div>
                <h1>Hello, {this.state.name}</h1>
                <button onClick={()=> alert('Hello')}>Click</button>
                <button onClick={this.greet.bind(this)}>Bind</button>
                <button onClick={this.showMessage}>Binding In constructor</button>
                <button onClick={this.handleClick}>Using Arror Function</button>
            </div>
        )
    }
}

ReactDOM.render(<Welcome />, document.getElementById('react-container'))