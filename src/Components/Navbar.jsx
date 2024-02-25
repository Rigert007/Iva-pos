import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse justify-content-between " id="navbarNav">
            <h3 style={{color:"white"}}>Iva Pos</h3>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/Dashboard">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/InvoiceForm">Invoices</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/CustomerForm">Customers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ItemForm">Items</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
