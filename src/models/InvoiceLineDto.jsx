class InvoiceLineDto {
    constructor(invoiceLine) {
      this.id = invoiceLine.id || 0;
      this.invoiceId = invoiceLine.invoiceId || 0;
      this.itemId = invoiceLine.itemId || 0;
      this.itemName = invoiceLine.itemName || '';
      this.itemCode = invoiceLine.itemCode || '';
      this.vatRate = invoiceLine.vatRate || 0.0;
      this.quantity = invoiceLine.quantity || 0;
      this.uom = invoiceLine.uom || '';
      this.unitPrice = invoiceLine.unitPrice || 0.0;
      this.lineTotal = invoiceLine.lineTotal || 0.0;
      this.discountPercent = invoiceLine.discountPercent || 0.0;
      this.discountTotalAmount = invoiceLine.discountTotalAmount || 0.0;
      this.totalAfterDiscount = invoiceLine.totalAfterDiscount || 0.0;
      this.notes = invoiceLine.notes || '';
      this.taxAmount = invoiceLine.taxAmount || 0.0;
      this.totalIncludingTax = invoiceLine.totalIncludingTax || 0.0;
    }
  }
  
  export default InvoiceLineDto;