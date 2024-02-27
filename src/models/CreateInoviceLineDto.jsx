class CreateInvoiceLineDto {
    constructor(invoiceLine) {
        this.itemId = invoiceLine.itemId || null;
        this.itemName = invoiceLine.itemName || "";
        this.itemCode = invoiceLine.itemCode || "";
        this.vatRate = invoiceLine.vatRate || null;
        this.quantity = invoiceLine.quantity || null;
        this.uom = invoiceLine.uom || "";
        this.unitPrice = invoiceLine.unitPrice || null;
        this.discountPercent = invoiceLine.discountPercent || null;
        this.notes = invoiceLine.notes || "";
    }
}
export default CreateInvoiceLineDto;
