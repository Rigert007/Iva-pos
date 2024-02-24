import CreateInvoiceLineDto from "./CreateInoviceLineDto";
class CreateInvoiceDto {
    constructor(invoice) {
      this.invoiceDate = invoice.invoiceDate || '';
      this.invoiceNumber = invoice.invoiceNumber || '';
      this.customerId = invoice.customerId || null;
      this.totalAmount = invoice.totalAmount || null;
      this.totalVatAmount = invoice.totalVatAmount || null;
      this.totalDiscountAmount = invoice.totalDiscountAmount || null;
      this.isPaid = invoice.isPaid || false;
      this.notes = invoice.notes || '';
      this.user = invoice.user || '';
      this.invoiceLines = invoice.invoiceLines.map(line => new CreateInvoiceLineDto(line));
    }
  }

  export default CreateInvoiceDto;