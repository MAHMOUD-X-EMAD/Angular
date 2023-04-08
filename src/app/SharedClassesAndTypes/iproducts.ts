export interface IProducts {
ID : number
Name : string
Quantity : number
Price : number
Img : string
}

export class Product implements IProducts{
    ID!: number
    Name!: string

    Quantity!: number
    Price!: number
    Img!: string
    constructor(id : number , name : string ,quan : number,price :number,img:string){
        this.ID = id;
        this.Img = img;
        this.Name = name;
        this.Quantity = quan;
        this.Price = price;
    }

}

