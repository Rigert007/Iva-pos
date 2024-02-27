import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerDto from '../models/CustomerDto';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';

const CustomersTable = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('/api/customers');
        const customerDtos = response.data.map(customer => new CustomerDto(customer));
        setCustomers(customerDtos);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);
  const handleEditCustomer = (customerId) => {
    navigate(`/editCustomer/${customerId}`);
  };

  const handleDeleteCustomer = (customerId) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      axios.delete(`/api/customers/${customerId}`)
        .then(response => {
          setCustomers(customers.filter(customer => customer.id !== customerId));
        })
        .catch(error => {
          console.error('Error deleting customer:', error);
        });
    }
  };
  


  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };
  const navigateToCustomerForm = () => {
    navigate('/CustomerForm');
  };

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Customers List</h2>
          <button className="btn btn-primary" onClick={navigateToCustomerForm}>Add Customer</button>
        </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>City</th>
            <th>Postal Code</th>
            <th>Country</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td data-label="ID">{customer.id}</td>
              <td data-label="Name">{customer.name}</td>
              <td data-label="Email">{customer.email}</td>
              <td data-label="Phone">{customer.phone}</td>
              <td data-label="Address">{customer.address}</td>
              <td data-label="City">{customer.city}</td>
              <td data-label="Postal Code">{customer.postalCode}</td>
              <td data-label="Country">{customer.country}</td>
              <td data-label="Created At">{formatDate(customer.createdAt)}</td>
              <td>
                <BsPencilSquare
                  className="me-2 text-primary"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleEditCustomer(customer.id)}
                />
                <BsTrash
                  className="text-danger"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleDeleteCustomer(customer.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTable;
