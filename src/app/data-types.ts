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
    productId: undefined | number,
    
}
export interface cart{
    name:string,
    price:number,
    color:string,
    category:string,
    description:string,
    image:string,
    id:number | undefined,
    quantity: undefined | number,
    productId:number,
    userId:number
}