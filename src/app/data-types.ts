export interface signup{
    name:string,
    email:string,
    password:string
}
export interface login{
    email:string,
    password:string
}
export interface product{
    name:string,
    price:number,
    color:string,
    category:string,
    description:string,
    image:string,
    id:number,
    quantity: undefined | number,
    productId: undefined | number
}