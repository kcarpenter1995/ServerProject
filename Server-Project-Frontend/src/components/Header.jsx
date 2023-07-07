import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-dark bg-primary">
                        <div><a href="/employees" className="navbar-brand">Employee Management</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;