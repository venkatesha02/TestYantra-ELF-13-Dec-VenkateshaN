
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHome: true,
            isLogin: false,
            isCreateAccount: false
        }
    }

    click = (istrue) => {
        if (istrue==="isLogin") {
            this.setState({
                isLogin: true,
                isCreateAccount: false,
                isHome: false
            })
        }
       if (istrue==="isCreate") {
            this.setState({
                isCreateAccount: true,
                isHome: false,
                isLogin: false
            })
        }
       if (istrue==="isHome") {
            this.setState({
                isHome: true,
                isCreateAccount: false,
                isLogin: false
            })
        }

    }

    render() {

        const home = <div><img src="318388.jpg" width="100%" height="500px"></img></div>

        const login = <div className="col-md-4  mt-3 offset-4 card p-5 mb-5">
            <form>
                <tr>
                    <lable>Email</lable>
                    <input className="form-control" type='text' ></input>
                </tr>
                <tr>
                    <lable>Password</lable>
                    <input className="form-control" type='Password' ></input>
                </tr>
                <tr>
                    <input className=" mt-2 offset-4 btn btn-primary" type='submit' value="Login" ></input>
                </tr>
            </form>
        </div>

        const createAccount = <div>
            <div className="col-md-4  mt-3 offset-4 card p-5 mb-5">
                <tr>
                    <lable>Name</lable>
                    <input className="form-control" type='text' ></input>
                </tr>
                <tr>
                    <lable>Address</lable>
                    <input className="form-control" type="text"></input>
                </tr>
                <tr>
                    <lable>Email</lable>
                    <input className="form-control" type='text' ></input>
                </tr>
                <tr>
                    <lable>Password</lable>
                    <input className="form-control" type='Password' ></input>
                </tr>
                <tr>
                    <input className=" mt-2 offset-4 btn btn-primary" type='submit' value="Create" ></input>
                </tr>
            </div>
        </div>

        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Demo</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item active">
                                <a className="nav-link" onClick={this.click.bind(this,"isHome")}>Home</a>
                            </li>

                            <li className="nav-item active">
                                <a className="nav-link" onClick={this.click.bind(this, "isLogin")} >Login</a>
                            </li>

                            <li className="nav-item active">
                                <a className="nav-link" onClick={this.click.bind(this,"isCreate")} >Create Account</a>
                            </li>

                        </ul>

                    </div>
                </nav>
                {this.state.isHome ? home : ""}
                {this.state.isLogin ? login : ""}
                {this.state.isCreateAccount ? createAccount : ""}
                <Footer />
            </div>
        )

    }

}

function Footer() {

    return (
        <div className="container">
            <footer className="page-footer font-small blue pt-4">
                <div className="container-fluid text-center text-md-left">

                    <div className="row">

                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Footer Content</h5>
                            <p>Here you can use rows and columns to organize your footer content.</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-3"></hr>
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2018 Copyright:<a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
                </div>
            </footer>
        </div>
    )
}


ReactDOM.render(<div><Header /></div>, document.getElementById('react-container'))