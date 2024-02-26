import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import { ItemDto }  from '../models/ItemDto';

const ItemsTable = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('/api/items');
        const itemDtos = response.data.map(item => new ItemDto(item));
        setItems(itemDtos);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);
  const handleEditItem = (ItemId) => {
    navigate(`/editItem/${ItemId}`);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const navigateToItemForm = () => {
    navigate('/ItemForm');
  };

  const handleDeleteItem = (itemId) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      axios.delete(`/api/items/${itemId}`)
        .then(response => {
          setItems(items.filter(item => item.id !== itemId));
          navigate('/Item');
        })
        .catch(error => {
          console.error('Error deleting item:', error);
        });
    }
  };
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Items List</h2>
        <button className="btn btn-primary" onClick={navigateToItemForm}>Add Item</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Code</th>
            <th>Price</th>
            <th>Description</th>
            <th>Is Active</th>
            <th>Deactivated At</th>
            <th>Is Deleted</th>
            <th>Deleted At</th>
            <th>Item Type</th>
            <th>VAT Rate</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.code}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>{item.isActive ? 'Yes' : 'No'}</td>
              <td>{formatDate(item.deactivatedAt)}</td>
              <td>{item.isDeleted ? 'Yes' : 'No'}</td>
              <td>{formatDate(item.deletedAt)}</td>
              <td>{item.itemType}</td>
              <td>{item.vatRate}</td>
              <td>{formatDate(item.createdAt)}</td>
              <td>{formatDate(item.updatedAt)}</td>
              <td>
                <BsPencilSquare
                  className="me-2 text-primary"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleEditItem(item.id)}
                />
                <BsTrash
                  className="text-danger"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleDeleteItem(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemsTable;
