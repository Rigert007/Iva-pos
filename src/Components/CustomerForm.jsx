import React, { useState } from 'react';
import axios from 'axios';
import CreateCustomerDto from '../models/CreateCustomerDto'; // Make sure this path is correct based on your project structure

const CustomerForm = () => {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomer(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Create the DTO from the form state
    const customerData = new CreateCustomerDto(customer);
    
    // Use a relative URL path which will be proxied to the configured server in package.json
    const apiEndpoint = '/api/Customers';
    
    // Use Axios to send a POST request
    axios.post(apiEndpoint, customerData)
      .then(response => {
        // Handle the response
        console.log('Customer created:', response.data);
        // Optionally reset the form or handle the successful submission
        setCustomer({
          name: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          postalCode: '',
          country: ''
        });
      })
      .catch(error => {
        // Handle any errors
        console.error('Error creating customer:', error);
      });
  };


  return (
    <div>
      <h2>Create Customer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={customer.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={customer.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={customer.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={customer.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={customer.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code:</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={customer.postalCode}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={customer.country}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Customer</button>
      </form>
    </div>
  );
};

export default CustomerForm;
