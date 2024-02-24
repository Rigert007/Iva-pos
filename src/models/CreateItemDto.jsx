// CreateItemDto.js
class CreateItemDto {
    constructor(item) {
        this.name = item.name || '';
        this.code = item.code || '';
        this.price = item.price || 0.0;
        this.description = item.description || '';
        this.itemType = item.itemType || 0; // Assuming a default value for enum
        this.vatRate = item.vatRate || 0.0;
        this.weight = item.weight || 0.0;
        this.length = item.length || 0.0;
        this.width = item.width || 0.0;
        this.height = item.height || 0.0;
        this.sku = item.sku || '';
        this.barcode = item.barcode || '';
        this.manufacturer = item.manufacturer || '';
        this.brand = item.brand || '';
        this.model = item.model || '';
        this.color = item.color || '';
        this.size = item.size || '';
        this.material = item.material || '';
        this.countryOfOrigin = item.countryOfOrigin || '';
        this.warranty = item.warranty || '';
        this.supplier = item.supplier || '';
        this.uom = item.uom || ''; // Unit of measurement
    }
}

export default CreateItemDto;
