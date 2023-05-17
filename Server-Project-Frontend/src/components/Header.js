import React from "react";

const Header = () => {
    return (
        <div>
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href = "http://localhost:8081/employees" className = "navbar-brand">
                            Employee Management Application
                        </a>
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default Header;