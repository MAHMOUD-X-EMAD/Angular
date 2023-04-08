import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { IProducts, Product } from '../SharedClassesAndTypes/iproducts';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
 @ViewChild(ChildComponent) child!: ChildComponent;
  productsFromChild : any;

  ngAfterViewInit(): void {
    
    this.child.sayWelcome();
    
  }
  
}
