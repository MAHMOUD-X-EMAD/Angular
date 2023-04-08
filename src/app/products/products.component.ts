import { Component, EventEmitter, Output } from '@angular/core';
import { IProducts, Product } from '../SharedClassesAndTypes/iproducts';
import { ProductService } from '../services/ProductService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Output() ShowEvent = new EventEmitter();
  ProductList!: IProducts[]; 
  errorMessage: any;


  constructor(private proService:ProductService){
   
  }


  public renderValues(){
    
    this.proService.GetAllProducts().subscribe({
      next:data=>this.ProductList=data,
      error:error=>this.errorMessage=error
    })
    this.ShowEvent.emit(this.ProductList);
}
}
