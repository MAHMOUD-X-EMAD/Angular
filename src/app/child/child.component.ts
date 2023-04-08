import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProducts, Product } from '../SharedClassesAndTypes/iproducts';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
    @Input() parentData : any;
    @Output() ShowEvent = new EventEmitter();

    listOfPro! : IProducts[];
    constructor(){
     
  
      var pro1 = new Product(1,'LG',2,25000,'/assets/home.png');
      var pro2 = new Product(2,'Dell',6,21000,'/assets/home.png');
      var pro3 = new Product(3,'Lenovo',3,30000,'/assets/home.png');

      this.listOfPro = [pro1,pro2,pro3];

}

    public Display(){

      this.ShowEvent.emit(this.listOfPro);

    }

    public sayWelcome(){

      console.log("Welcome");

    }
      
}

