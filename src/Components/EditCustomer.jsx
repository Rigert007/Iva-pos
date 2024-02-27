import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const EditCustomer = () => {
    const [customer, setCustomer] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
    });
    const { customerId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const response = await axios.get(
                    `/api/customers/${customerId}`
                );
                setCustomer(response.data);
            } catch (error) {
                console.error("Error fetching customer:", error);
            }
        };

        fetchCustomer();
    }, [customerId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCustomer({ ...customer, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`/api/customers/${customerId}`, customer);
            navigate("/Customer"); // Redirect to the customers list page after the edit
        } catch (error) {
            console.error("Error updating customer:", error);
        }
    };

    return (
        <div className="container mt-3">
            <h2>Edit Customer</h2>
            <form onSubmit={handleSubmit}>
                {/* Repeat the following structure for each field */}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                    />
                </div>
                {/* Add additional fields as necessary /}
            {/ ... */}
                <button type="submit" className="btn btn-primary">
                    Update Customer
                </button>
            </form>
        </div>
    );
};

export default EditCustomer;
