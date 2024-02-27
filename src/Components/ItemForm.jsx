import React, { useState } from "react";
import axios from "axios";
import CreateItemDto from "../models/CreateItemDto";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemForm = () => {
    const [item, setItem] = useState({
        id: 0,
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

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const isCheckbox = type === "checkbox";
        setItem({
            ...item,
            [name]: isCheckbox ? checked : value,
        });
    };
    const handleInputChangeType = (event) => {
        const { name, value, type } = event.target;
        // Convert value to a number if the input is a radio button and it's for 'itemType'
        const isItemTypeRadio = type === "radio" && name === "itemType";
        const finalValue = isItemTypeRadio ? Number(value) : value;

        setItem({
            ...item,
            [name]: finalValue,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const itemDto = new CreateItemDto(item);
        try {
            const jsonItemDto = JSON.stringify(itemDto);
            const response = await axios.post("/api/items", jsonItemDto, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("Item created:", response.data);
            setItem({
                ...{
                    name: "",
                    code: "",
                    price: 0,
                    description: "",
                    itemType: 0,
                    vatRate: 0,
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
                },
            });
        } catch (error) {
            console.error("Error creating item:", error);
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
                        value={item.name}
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
                        value={item.code}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                        Price:
                    </label>
                    <input
                        className="form-control"
                        id="price"
                        name="price"
                        value={item.price}
                        onChange={handleInputChange}
                        onWheel={(e) => e.target.blur()}
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
                <div className="mb-3"></div>
                <div>
                    <input
                        className="form-check-input"
                        type="radio"
                        name="itemType"
                        id="itemType0"
                        value={0}
                        checked={item.itemType === 0}
                        onChange={handleInputChangeType}
                    />
                    <label htmlFor="itemType0">Option 0</label>
                </div>

                <div>
                    <input
                        className="form-check-input"
                        type="radio"
                        name="itemType"
                        id="itemType1"
                        value={1}
                        checked={item.itemType === 1}
                        onChange={handleInputChangeType}
                    />
                    <label htmlFor="itemType1">Option 1</label>
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
                        onWheel={(e) => e.target.blur()}
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
                        onWheel={(e) => e.target.blur()}
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
                        onWheel={(e) => e.target.blur()}
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
                        onWheel={(e) => e.target.blur()}
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
                        onWheel={(e) => e.target.blur()}
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
                    Create Item
                </button>
            </form>
        </div>
    );
};

export default ItemForm;
