export class Customer {
    public id: number
    public name: string
    public email: string
    public phone: string
    public address: string
    public city: string
    public state: string
    public zipcode: string
    public created_at: Date
    public updated_at: Date

    constructor(
        id: number,
        name: string,
        email: string,
        phone: string,
        address: string,
        city: string,
        state: string,
        zipcode: string
    ) {
        this.id = id
        this.name = name
        this.email = email
        this.phone = phone
        this.address = address
        this.city = city
        this.state = state
        this.zipcode = zipcode
        this.created_at = new Date()
    }
}