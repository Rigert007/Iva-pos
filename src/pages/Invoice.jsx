import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsPencilSquare } from "react-icons/bs";
import InvoiceDto from "../models/InvoiceDto";
import "../style/Invoice.css";

const InvoicesTable = () => {
    const [invoices, setInvoices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const response = await axios.get("/api/invoices");
                const invoiceDtos = response.data.map(
                    (invoice) => new InvoiceDto(invoice)
                );
                setInvoices(invoiceDtos);
            } catch (error) {
                console.error("Error fetching invoices:", error);
            }
        };

        fetchInvoices();
    }, []);

    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const navigateToInvoiceForm = () => {
        navigate("/InvoiceForm");
    };
    const navigateToCustomerForm = () => {
        navigate("/CustomerForm");
    };
    const handleEditInvoice = (invoiceId) => {
        navigate(`/editInvoice/${invoiceId}`);
    };
    return (
        <div className="container mt-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Invoices List</h2>
                <div className="buttons d-grid">
                    <button
                        className="btn btn-primary m-2"
                        onClick={navigateToInvoiceForm}
                    >
                        Add Invoice
                    </button>
                    <button
                        className="btn btn-primary m-2"
                        onClick={navigateToCustomerForm}
                    >
                        Add Customer
                    </button>
                </div>
            </div>
            <div className="table-responsive-custom">
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
                            <th>User</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map((invoice) => (
                            <tr key={invoice.id}>
                                <td data-label="ID">{invoice.id}</td>
                                <td data-label="Invoice Date">
                                    {formatDate(invoice.invoiceDate)}
                                </td>
                                <td data-label="Invoice Number">
                                    {invoice.invoiceNumber}
                                </td>
                                <td data-label="Customer Id">
                                    {invoice.customerId}
                                </td>
                                <td data-label="Total Amount">
                                    {invoice.totalAmount}
                                </td>
                                <td data-label="Total Vat Amount">
                                    {invoice.totalVatAmount}
                                </td>
                                <td data-label="Total Discount Amount">
                                    {invoice.totalDiscountAmount}
                                </td>
                                <td data-label="IsP aid">
                                    {invoice.isPaid ? "Yes" : "No"}
                                </td>
                                <td data-label="User">{invoice.user}</td>
                                <td>
                                    <BsPencilSquare
                                        className="me-2 text-primary"
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                            handleEditInvoice(invoice.id)
                                        }
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InvoicesTable;
