export interface User{
    id:string
    email:string
    dob:Date
    name:string
    phone:string
    nationality:string
}

export interface UserInformation{
    customerCount: number
    dob: Date
    email: string
    id: number
    mostReferencedCustomer: string
    name: string
    nationality: string
    phone: string
    totalPayments: number
    tripCount: number
}