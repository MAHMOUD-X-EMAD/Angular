import { Component } from '@angular/core';
import { RegisteredUser } from '../RegisteredUser';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../Validations/ConfirmPass.Validators';
import { ForbiddenNameValidator } from '../Validations/NotAllowedNames.Validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private fb:FormBuilder) { }


  MyForm=this.fb.group({
    userName:['',[Validators.required,Validators.pattern("[a-zA-Z]+")],ForbiddenNameValidator(/admin/),,ForbiddenNameValidator(/adminstrator/)],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]],
    email:['',[Validators.required]],
    
  },{validator:[ConfirmPasswordValidator]})

  arr=["facebook","twitter","google"];
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
