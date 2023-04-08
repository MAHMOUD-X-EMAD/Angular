import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }
  onSelectUser(){
    this.router.navigate(["/users"]);
  }

  onSelectPosts(){
    this.router.navigate(["/posts"]);
  }

  onSelectProducts(){
    this.router.navigate(["/products"]);
  }

  onSelectRegister(){
    this.router.navigate(["/register"]);
  }

  onSelectLogin(){
    this.router.navigate(["/login"]);
  }
  onSelectNotes(){
    this.router.navigate(["/notes"]);
  }
}
