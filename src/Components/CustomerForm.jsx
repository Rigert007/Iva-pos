import React, { useState } from "react";
import axios from "axios";
import CreateCustomerDto from "../models/CreateCustomerDto";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomerForm = () => {
    const [customer, setCustomer] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCustomer((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const customerData = new CreateCustomerDto(customer);

        const apiEndpoint = "/api/Customers";

        axios
            .post(apiEndpoint, customerData)
            .then((response) => {
                console.log("Customer created:", response.data);
                setCustomer({
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                    city: "",
                    postalCode: "",
                    country: "",
                });
            })
            .catch((error) => {
                console.error("Error creating customer:", error);
            });
    };

    return (
        <div className="container mt-3">
            <h2>Create Customer</h2>
            <form
                onSubmit={handleSubmit}
                className="needs-validation"
                noValidate
            >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={customer.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={customer.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Phone:
                    </label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={customer.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                        Address:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={customer.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">
                        City:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        value={customer.city}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="postalCode" className="form-label">
                        Postal Code:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="postalCode"
                        name="postalCode"
                        value={customer.postalCode}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">
                        Country:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="country"
                        name="country"
                        value={customer.country}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Create Customer
                </button>
            </form>
        </div>
    );
};

export default CustomerForm;
