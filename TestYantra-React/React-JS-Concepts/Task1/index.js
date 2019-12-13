function Header(props) {

    const navbar = <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
            </ul>
        </div>
    </nav>
    return navbar;

}

function Footer(props) {

    const footer = <footer className="page-footer font-small unique-color-dark pt-4">
            <div className="container">
                <ul className="list-unstyled list-inline text-center py-2">
                    <li className="list-inline-item">
                        <h5 className="mb-1">Register for free</h5>
                    </li>
                    <li className="list-inline-item">
                        <a href="#!" className="btn btn-outline-white btn-rounded">Sign up!</a>
                    </li>
                </ul>
            </div>
            <div className="footer-copyright text-center py-3">© 2018 Copyright:
        <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
            </div>
        </footer>
    return footer
}

ReactDOM.render(<div><Header/><Footer /></div>, document.getElementById('react-container'))