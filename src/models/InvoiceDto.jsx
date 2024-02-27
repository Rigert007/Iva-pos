import InvoiceLineDto from "./InvoiceLineDto";
class InvoiceDto {
    constructor(invoice) {
        this.id = invoice.id || 0;
        this.invoiceDate = invoice.invoiceDate || new Date().toISOString();
        this.invoiceNumber = invoice.invoiceNumber || "";
        this.customerId = invoice.customerId || 0;
        this.totalAmount = invoice.totalAmount || 0.0;
        this.totalVatAmount = invoice.totalVatAmount || 0.0;
        this.totalDiscountAmount = invoice.totalDiscountAmount || 0.0;
        this.isPaid = invoice.isPaid || false;
        this.notes = invoice.notes || "";
        this.createdAt = invoice.createdAt || new Date().toISOString();
        this.updatedAt = invoice.updatedAt || new Date().toISOString();
        this.user = invoice.user || "";
        this.invoiceLines = invoice.invoiceLines
            ? invoice.invoiceLines.map(
                  (invoiceLine) => new InvoiceLineDto(invoiceLine)
              )
            : [];
        this.totalWoVat = invoice.totalWoVat || 0.0;
    }
}

export default InvoiceDto;
