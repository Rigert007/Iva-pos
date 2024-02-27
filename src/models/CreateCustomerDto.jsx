class CreateCustomerDto {
    constructor(customer) {
        this.name = customer.name || "";
        this.email = customer.email || "";
        this.phone = customer.phone || "";
        this.address = customer.address || "";
        this.city = customer.city || "";
        this.postalCode = customer.postalCode || "";
        this.country = customer.country || "";
    }
}
export default CreateCustomerDto;
