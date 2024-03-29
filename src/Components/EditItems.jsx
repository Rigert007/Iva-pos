import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const EditItem = () => {
    const [item, setItem] = useState({
        name: "",
        code: "",
        price: 0,
        description: "",
        isActive: false,
        deactivatedAt: "",
        isDeleted: false,
        deletedAt: "",
        itemType: 0,
        vatRate: 0,
        createdAt: "",
        updatedAt: "",
        weight: 0,
        length: 0,
        width: 0,
        height: 0,
        sku: "",
        barcode: "",
        manufacturer: "",
        brand: "",
        model: "",
        color: "",
        size: "",
        material: "",
        countryOfOrigin: "",
        warranty: "",
        supplier: "",
        uom: "",
    });
    const { itemId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await axios.get(`/api/items/${itemId}`);
                setItem(response.data);
            } catch (error) {
                console.error("Error fetching item:", error);
            }
        };

        fetchItem();
    }, [itemId]);

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === "checkbox" ? checked : value;
        setItem({ ...item, [name]: newValue });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`/api/items/${itemId}`, item);
            navigate("/Item");
        } catch (error) {
            console.error(
                "Error updating item:",
                error.response ? error.response.data : error.message
            );
        }
    };

    return (
        <div className="container mt-3">
            <h2>Create Item</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={item.name || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="code" className="form-label">
                        Code:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="code"
                        name="code"
                        value={item.code || ""}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                        Price:
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        value={item.price}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description:
                    </label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={item.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="isActive"
                        name="isActive"
                        checked={item.isActive}
                        onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="isActive">
                        Is Active?
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="deactivatedAt" className="form-label">
                        Deactivated At:
                    </label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="deactivatedAt"
                        name="deactivatedAt"
                        value={item.deactivatedAt}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="isDeleted"
                        name="isDeleted"
                        checked={item.isDeleted}
                        onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="isDeleted">
                        Is Deleted?
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="deletedAt" className="form-label">
                        Deleted At:
                    </label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="deletedAt"
                        name="deletedAt"
                        value={item.deletedAt}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="itemType" className="form-label">
                        Item Type:
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="itemType"
                        name="itemType"
                        value={item.itemType}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="vatRate" className="form-label">
                        VAT Rate (%):
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="vatRate"
                        name="vatRate"
                        value={item.vatRate}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="createdAt" className="form-label">
                        Created At:
                    </label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="createdAt"
                        name="createdAt"
                        value={item.createdAt}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="updatedAt" className="form-label">
                        Updated At:
                    </label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="updatedAt"
                        name="updatedAt"
                        value={item.updatedAt}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="weight" className="form-label">
                        Weight:
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="weight"
                        name="weight"
                        value={item.weight}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="length" className="form-label">
                        Length:
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="length"
                        name="length"
                        value={item.length}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="width" className="form-label">
                        Width:
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="width"
                        name="width"
                        value={item.width}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="height" className="form-label">
                        Height:
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="height"
                        name="height"
                        value={item.height}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="sku" className="form-label">
                        SKU:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="sku"
                        name="sku"
                        value={item.sku}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="barcode" className="form-label">
                        Barcode:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="barcode"
                        name="barcode"
                        value={item.barcode}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="manufacturer" className="form-label">
                        Manufacturer:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="manufacturer"
                        name="manufacturer"
                        value={item.manufacturer}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="brand" className="form-label">
                        Brand:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="brand"
                        name="brand"
                        value={item.brand}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="model" className="form-label">
                        Model:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="model"
                        name="model"
                        value={item.model}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="color" className="form-label">
                        Color:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="color"
                        name="color"
                        value={item.color}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="size" className="form-label">
                        Size:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="size"
                        name="size"
                        value={item.size}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="material" className="form-label">
                        Material:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="material"
                        name="material"
                        value={item.material}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="countryOfOrigin" className="form-label">
                        Country of Origin:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="countryOfOrigin"
                        name="countryOfOrigin"
                        value={item.countryOfOrigin}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="warranty" className="form-label">
                        Warranty:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="warranty"
                        name="warranty"
                        value={item.warranty}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="supplier" className="form-label">
                        Supplier:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="supplier"
                        name="supplier"
                        value={item.supplier}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="uom" className="form-label">
                        Unit of Measure (UOM):
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="uom"
                        name="uom"
                        value={item.uom}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Update Item
                </button>
            </form>
        </div>
    );
};

export default EditItem;
