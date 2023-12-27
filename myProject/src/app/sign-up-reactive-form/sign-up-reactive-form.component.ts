import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-reactive-form',
  templateUrl: './sign-up-reactive-form.component.html',
  styleUrls: ['./sign-up-reactive-form.component.css']
})
export class SignUpReactiveFormComponent {
  signUpForm! : FormGroup;

  constructor( private formBuilder : FormBuilder){}
  ngOnInit(){
    this.formLoad()
  }
  formLoad(){
    this.signUpForm = this.formBuilder.group({
      Name : ['',[Validators.required]],
      Mobile : ['',[Validators.maxLength(10)]],
      Pancard: ['',[Validators.pattern("^[A-Z]{5}[0-9]{4}[A-Z]{1}$"),Validators.maxLength(10)]],
      Email : [''],
      Password : [''],
      ConfirmPassword : [''],
    })
  }
  submit(){
    console.log(this.signUpForm.value);
    
  }
}
