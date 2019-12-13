class ConditionalRendeting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            adminName: 'Chandru',
            userName: 'Giri',
            isAdmin: false,
            adminId: 100,
            userId: 200

        }
    }

    changeUserAdmin = () => {
        this.setState({
            isAdmin: !this.state.isAdmin
        })
    }

    naviagetTo = (event) => {
        console.log("Event ",event);
        event.preventDefault();
    }

    render() {

        /* if (this.state.isAdmin) {
            return <h1>{this.state.adminName}</h1>;
        }
        else {
            return <h1>{this.state.userName}</h1>;
        } */

        /* return (
            <div>
                <h1>
                    {this.state.isAdmin ? this.state.adminName : this.state.userName}
                </h1>
                <h1>
                    {this.state.isAdmin?this.state.adminId:this.state.userId}
                </h1>
                <p>Home</p>
                <p>Login</p>
            </div>
            )
 */


        /*    if (this.state.isAdmin) {
               return <h1>{this.state.adminName}</h1>;
           }
           else {
               return <h1>{this.state.userName}</h1>;
           } */

        //return this.state.isAdmin ? <h1>{this.state.adminName}</h1> : <h1>{this.state.userName}</h1>

        const admin = <div>
            <h1>{this.state.adminName}</h1>
            <h4>{this.state.adminId}</h4>
        </div>
        const user = <div>
            <h1>{this.state.userName}</h1>
            <h4>{this.state.userId}</h4>
        </div>

        return (
            <div>
                {this.state.isAdmin ? admin : user}
                <p>Home</p>
                <p>Login</p>
                <button onClick={this.changeUserAdmin}>Click</button>
                <a href='http://www.google.com' onClick={this.naviagetTo}>Navigate To Google</a>
            </div>
        )

    }

}
ReactDOM.render(<ConditionalRendeting />, document.getElementById('react-container'))