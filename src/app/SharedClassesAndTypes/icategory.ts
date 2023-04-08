export interface ICategory {
    ID : number
    Name : string
}

export class Category implements ICategory{
    ID!: number
    Name!: string

    constructor(id : number , name : string ){
        this.ID = id;
        
        this.Name = name;
        
    }

}
