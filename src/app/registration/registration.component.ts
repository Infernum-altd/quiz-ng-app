import { Component, OnInit } from '@angular/core';
import {RegistrationService} from "../service/registrationService/registration.service";
import {User} from "../models/user";
import {AuthenticationService} from "../service/loginService/authentication.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  model:User = {
    id:null,
    email:'',
    password:''
  };



  constructor(
    public service : RegistrationService,
    public authService: AuthenticationService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    let input: User = JSON.parse(JSON.stringify(this.registerForm.value));
    this.model.email = input.email;
    this.model.password = input.password;
    this.register();
  }


  register(): void{
    this.service.postRegisterInfo(this.model).subscribe(
      res =>{
        console.log(res);
      },
      error => {
        alert("An error has occurred on registration process");
      }
    );
  }

  get f() { return this.registerForm.controls; }
}

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}

