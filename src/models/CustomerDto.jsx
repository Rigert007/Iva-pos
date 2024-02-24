import InvoiceDto from "./InvoiceDto";
class CustomerDto {
    constructor(customer) {
      this.id = customer.id || 0;
      this.name = customer.name || '';
      this.email = customer.email || '';
      this.phone = customer.phone || '';
      this.address = customer.address || '';
      this.city = customer.city || '';
      this.postalCode = customer.postalCode || '';
      this.country = customer.country || '';
      this.createdAt = customer.createdAt || new Date().toISOString();
      this.updatedAt = customer.updatedAt || new Date().toISOString();
      this.isActive = customer.isActive || false;
      this.deactivatedAt = customer.deactivatedAt || '';
      this.isDeleted = customer.isDeleted || false;
      this.deletedAt = customer.deletedAt || '';
      // Assuming invoices is an array of InvoiceDto objects
      this.invoices = customer.invoices ? customer.invoices.map(invoice => new InvoiceDto(invoice)) : [];
    }
  }
  
  export default CustomerDto;