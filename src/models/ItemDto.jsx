export const ItemType = {
    TYPE_0: 0,
    TYPE_1: 1
};

export class ItemDto {
    constructor(item) {
      this.id = item.id || 0;
      this.name = item.name || '';
      this.code = item.code || '';
      this.price = item.price || 0.0;
      this.description = item.description || '';
      this.isActive = item.isActive || false;
      this.deactivatedAt = item.deactivatedAt || '';
      this.isDeleted = item.isDeleted || false;
      this.deletedAt = item.deletedAt || '';
      this.itemType = ItemType[item.itemType] || ItemType.TYPE_0;
      this.vatRate = item.vatRate || 0.0;
      this.createdAt = item.createdAt || new Date().toISOString();
      this.updatedAt = item.updatedAt || new Date().toISOString();
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
      this.uom = item.uom || '';
    }
}
  