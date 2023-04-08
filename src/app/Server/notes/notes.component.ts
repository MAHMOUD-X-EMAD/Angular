import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisteredUser } from 'src/app/RegisteredUser';
import { ConfirmPasswordValidator } from 'src/app/Validations/ConfirmPass.Validators';
import { ForbiddenNameValidator } from 'src/app/Validations/NotAllowedNames.Validators';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  constructor(private fb:FormBuilder) {
    
   }

  subscribe2:boolean=false;

  MyForm=this.fb.group({
    userName:['',[Validators.required,Validators.pattern("[a-zA-Z]+")],ForbiddenNameValidator(/admin/)],
    subscribe:[false],
    email:['',[Validators.required]],
    
  },{validator:[ConfirmPasswordValidator]})

  arr=["Mobile","Laptop","PC","HeadPhone"];
  newUser = new RegisteredUser("Mahmoud1","12345","Mahmoud@gmail.com","12345","");
  
  get userName()
  {
    return this.MyForm.get('userName');
  }

  get email()
  {
    return this.MyForm.get('email');
  }
  
}
