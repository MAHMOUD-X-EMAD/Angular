import { Component, ViewChild } from '@angular/core';
import { DiscountOffers } from './SharedClassesAndTypes/discount-offers';
import { Category, ICategory } from './SharedClassesAndTypes/icategory';
import { IProducts, Product } from './SharedClassesAndTypes/iproducts';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './products/products.component';
@Component({
  selector: 'myFirstApp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Discount: DiscountOffers = DiscountOffers.NoDiscount;
  ProductList!: IProducts[]; 
  CategoryList!: ICategory[]; 
  StoreName : string = "";
  StoreLogo : string = "";
  ClientName : string = "";
  IsPurchased : boolean = false;
  IsNoDis=true;
  @ViewChild(ProductsComponent) child!: ProductsComponent;
  productsFromChild : any;

  
  constructor(private modalService: NgbModal){
    var cat1 = new Category(1,'Mobiles');
    var cat2 = new Category(2,'Laptops');
    var cat3 = new Category(3,'PCs');

    var pro1 = new Product(1,'LG',2,25000,'/assets/home.png');
    var pro2 = new Product(2,'Dell',6,21000,'/assets/home.png');
    var pro3 = new Product(3,'Lenovo',3,30000,'/assets/home.png');

    this.Discount = DiscountOffers.TenDiscount
    this.ProductList = [pro1,pro2,pro3]
    this.CategoryList = [cat1,cat2,cat3]
    this.StoreName  = "LG";
    this.StoreLogo = "/assets/home.png";
    this.ClientName = "Hamada";
    this.IsPurchased = false;
  }

  TogglePurchase()
  {
    if(this.IsPurchased){
      this.IsPurchased = false;
    }
    else{
      this.IsPurchased = true;
    }
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  title = 'AngularProj';
}
