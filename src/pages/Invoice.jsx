import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPencilSquare } from 'react-icons/bs';
import InvoiceDto from '../models/InvoiceDto';

const InvoicesTable = () => {
  const [invoices, setInvoices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get('/api/invoices');
        const invoiceDtos = response.data.map(invoice => new InvoiceDto(invoice));
        setInvoices(invoiceDtos);
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };

    fetchInvoices();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const navigateToInvoiceForm = () => {
    navigate('/InvoiceForm');
  };
  const handleEditInvoice = (invoiceId) => {
    navigate(`/editInvoice/${invoiceId}`);
  };
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Invoices List</h2>
        <button className="btn btn-primary" onClick={navigateToInvoiceForm}>Add Invoice</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Invoice Date</th>
            <th>Invoice Number</th>
            <th>Customer ID</th>
            <th>Total Amount</th>
            <th>Total Vat Amount</th>
            <th>Total Discount Amount</th>
            <th>Is Paid</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>User</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(invoice => (
            <tr key={invoice.id}>
              <td>{invoice.id}</td>
              <td>{formatDate(invoice.invoiceDate)}</td>
              <td>{invoice.invoiceNumber}</td>
              <td>{invoice.customerId}</td>
              <td>{invoice.totalAmount}</td>
              <td>{invoice.totalVatAmount}</td>
              <td>{invoice.totalDiscountAmount}</td>
              <td>{invoice.isPaid ? 'Yes' : 'No'}</td>
              <td>{formatDate(invoice.createdAt)}</td>
              <td>{formatDate(invoice.updatedAt)}</td>
              <td>{invoice.user}</td>
              <td>
                <BsPencilSquare
                  className="me-2 text-primary"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleEditInvoice(invoice.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoicesTable;
