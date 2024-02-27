import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <h3 style={{ color: "white" }}>Iva Pos</h3>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-between"
                    id="navbarNav"
                >
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                aria-current="page"
                                href="/DashboardForm"
                            >
                                Dashboard
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Invoice">
                                Invoices
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Customer">
                                Customers
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Item">
                                Items
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
