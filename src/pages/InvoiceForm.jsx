import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateInvoiceDto from '../models/CreateInvoiceDto';

const InvoiceForm = () => {
  const [invoice, setInvoice] = useState({
    invoiceDate: '',
    invoiceNumber: '',
    customerId: 0,
    totalAmount: 0,
    totalVatAmount: 0,
    totalDiscountAmount: 0,
    isPaid: false,
    notes: '',
    user: '',
    invoiceLines: [
      {
        itemId: 0,
        itemName: '',
        itemCode: '',
        vatRate: 0,
        quantity: 0,
        uom: '',
        unitPrice: 0,
        discountPercent: 0,
        notes: ''
      }
    ]
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    const inputValue = type === 'checkbox' ? checked : value;

    setInvoice({ ...invoice, [name]: inputValue });
  };

  const handleInvoiceLinesChange = (index, event) => {
    const { name, value } = event.target;

    const newInvoiceLines = invoice.invoiceLines.map((lineItem, lineIndex) => {
      if (index === lineIndex) {
        return { ...lineItem, [name]: value };
      }
      return lineItem;
    });

    setInvoice({ ...invoice, invoiceLines: newInvoiceLines });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const invoiceDto = new CreateInvoiceDto(invoice);
  
    const apiEndpoint = '/api/Invoices';
    axios.post(apiEndpoint, invoiceDto)
      .then(response => {
        console.log('Invoice created:', response.data);
        setInvoice({
            invoiceDate: '',
            invoiceNumber: '',
            customerId: 0,
            totalAmount: 0,
            totalVatAmount: 0,
            totalDiscountAmount: 0,
            isPaid: false,
            notes: '',
            user: '',
            invoiceLines: [
              {
                itemId: 0,
                itemName: '',
                itemCode: '',
                vatRate: 0,
                quantity: 0,
                uom: '',
                unitPrice: 0,
                discountPercent: 0,
                notes: ''
              }
            ]
        });
      })
      .catch(error => {
        console.error('Error creating invoice:', error);
      });
  };

  return (
    <div className="container mt-3">
      <h2>Create Invoice</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="invoiceDate" className="form-label">Invoice Date:</label>
          <input
            type="datetime-local"
            className="form-control"
            id="invoiceDate"
            name="invoiceDate"
            value={invoice.invoiceDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="invoiceNumber" className="form-label">Invoice Number:</label>
          <input
            type="text"
            className="form-control"
            id="invoiceNumber"
            name="invoiceNumber"
            value={invoice.invoiceNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="customerId" className="form-label">Customer ID:</label>
          <input
            type="number"
            className="form-control"
            id="customerId"
            name="customerId"
            value={invoice.customerId}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="totalAmount" className="form-label">Total Amount:</label>
          <input
            type="number"
            className="form-control"
            id="totalAmount"
            name="totalAmount"
            value={invoice.totalAmount}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="totalVatAmount" className="form-label">Total VAT Amount:</label>
          <input
            type="number"
            className="form-control"
            id="totalVatAmount"
            name="totalVatAmount"
            value={invoice.totalVatAmount}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="totalDiscountAmount" className="form-label">Total Discount Amount:</label>
          <input
            type="number"
            className="form-control"
            id="totalDiscountAmount"
            name="totalDiscountAmount"
            value={invoice.totalDiscountAmount}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="isPaid"
            name="isPaid"
            checked={invoice.isPaid}
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="isPaid">Is Paid?</label>
        </div>
        <div className="mb-3">
          <label htmlFor="notes" className="form-label">Notes:</label>
          <textarea
            className="form-control"
            id="notes"
            name="notes"
            value={invoice.notes}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="user" className="form-label">User:</label>
          <input
            type="text"
            className="form-control"
            id="user"
            name="user"
            value={invoice.user}
            onChange={handleInputChange}
          />
        </div>
        {invoice.invoiceLines.map((line, index) => (
          <div key={index} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Invoice Line {index + 1}</h5>
              <div className="mb-3">
                <label htmlFor={`itemId-${index}`}>Item ID:</label>
                <input
                  type="number"
                  className="form-control"
                  id={`itemId-${index}`}
                  name="itemId"
                  value={line.itemId}
                  onChange={e => handleInvoiceLinesChange(index, e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor={`itemName-${index}`}>Item Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id={`itemName-${index}`}
                  name="itemName"
                  value={line.itemName}
                  onChange={e => handleInvoiceLinesChange(index, e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor={`itemCode-${index}`}>Item Code:</label>
                <input
                  type="text"
                  className="form-control"
                  id={`itemCode-${index}`}
                  name="itemCode"
                  value={line.itemCode}
                  onChange={e => handleInvoiceLinesChange(index, e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor={`vatRate-${index}`}>VAT Rate:</label>
                <input
                  type="number"
                  className="form-control"
                  id={`vatRate-${index}`}
                  name="vatRate"
                  value={line.vatRate}
                  onChange={e => handleInvoiceLinesChange(index, e)}
                />
              </div>
              <div className="mb-3">
        <label htmlFor={`quantity-${index}`}>Quantity:</label>
        <input
          type="number"
          className="form-control"
          id={`quantity-${index}`}
          name="quantity"
          value={line.quantity}
          onChange={e => handleInvoiceLinesChange(index, e)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor={`uom-${index}`}>Unit of Measure (UOM):</label>
        <input
          type="text"
          className="form-control"
          id={`uom-${index}`}
          name="uom"
          value={line.uom}
          onChange={e => handleInvoiceLinesChange(index, e)}
        />
      </div>
        <div className="mb-3">
            <label htmlFor={`unitPrice-${index}`}>Unit Price:</label>
            <input
            type="number"
            className="form-control"
            id={`unitPrice-${index}`}
            name="unitPrice"
            value={line.unitPrice}
            onChange={e => handleInvoiceLinesChange(index, e)}
            />
        </div>
        <div className="mb-3">
            <label htmlFor={`discountPercent-${index}`}>Discount Percent:</label>
            <input
            type="number"
            className="form-control"
            id={`discountPercent-${index}`}
            name="discountPercent"
            value={line.discountPercent}
            onChange={e => handleInvoiceLinesChange(index, e)}
            />
        </div>
              <div className="mb-3">
                <label htmlFor={`notes-${index}`}>Notes:</label>
                <input
                  type="text"
                  className="form-control"
                  id={`notes-${index}`}
                  name="notes"
                  value={line.notes}
                  onChange={e => handleInvoiceLinesChange(index, e)}
                />
              </div>
            </div>
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Create Invoice</button>
      </form>
    </div>
  );
};

export default InvoiceForm;
