class Parent extends React.Component {
    constructor(props) {
        super(props)
        console.log("Parent Constuctor");
        this.state = {
            name: 'Mounting phase',
            show: true
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Parent getDirevedStateFromProps');
        return null;
    }

    changeName = ()=>{
        this.setState({
            name:'Updateing State'
        })
    }

    removeChild = ()=>{
        this.setState({
            show:false
        })
    }

    render() {
        console.log('Parent Render');

        return (
            <div>
                <h1>Parent Component</h1>
                {this.state.show?<Child/>:<h1>Child Component Un mounterd</h1>}
                
                <button onClick={this.changeName}>Change the Name</button>
                <button onClick={this.removeChild}>Remove Child</button>
            </div>
        )
    }

    componentDidMount() {
        console.log('Parent componentDidMount');
    }

    shouldComponentUpdate(){
        console.log("Parant shouldComponentUpdate");
        return true

    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Parent getSnapshotBeforeUpdate');
        console.log('Previos state ',prevState);
        console.log('Current state ',this.state);
        return "scrolling position"
        
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('Parent componentDidUpdate');
        console.log('Previos state ',prevState);
        console.log('Snapshot ',snapshot);
        
    }

    componentWillUnmount(){
        console.log('Parent componentWillUnmount ');
        
    }

}

class Child extends React.Component{
    constructor(props){
        super(props)
        console.log('-------Child Constructor--------');
        
    }

    static getDerivedStateFromProps(){
        console.log('Child getDerivedStateFromProps');
        return null;
    }

    render(){
        return(
            <div>
                <h1>Child Component</h1>
            </div>
        )
    }

    componentDidMount() {
        console.log('Child componentDidMount');
    }

    shouldComponentUpdate(){
        console.log("Child shouldComponentUpdate");
        return true

    }

    getSnapshotBeforeUpdate(){
        console.log('Child getSnapshotBeforeUpdate');
        
    }

    componentDidUpdate(){
        console.log('Child componentDidUpdate');
        
    }

    componentWillUnmount(){
        console.log('Child componentWillUnmount ');
        
    }
}

ReactDOM.render(<div>
                <Parent/>
                </div>, document.getElementById('react-container'))