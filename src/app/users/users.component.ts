import { Component, Output ,EventEmitter } from '@angular/core';
import { UsersService } from '../users.service';
import { IUsers } from 'src/Users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  @Output() ShowEvent = new EventEmitter();
  listOfUsers! : IUsers[];
  errorMessage : any;

  constructor(private userService:UsersService){

  }
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next:data=>this.listOfUsers=data,
      error:error=>this.errorMessage=error
    })

    this.ShowEvent.emit(this.listOfUsers);
  }
}
