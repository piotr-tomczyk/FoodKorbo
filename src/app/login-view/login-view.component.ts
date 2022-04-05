import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';

import { ConfirmedValidator, MatchValidator } from '../CustomValidators';
import { users, User, getMaxID, addUser } from '../users';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private route:Router) { }
  signUpForm!: FormGroup;
  loginForm!: FormGroup;
  isLogin = true;
  HideError = true;
  signedUp = false;
  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,32}$";
  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      username:  new FormControl('', [
        Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordPattern)]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    {
      validator: ConfirmedValidator('password', 'confirmPassword'),
    });
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    },
    {
      validator: [MatchValidator('username'), MatchValidator('password')]
    });
  }
  get usernameSign() { return this.signUpForm.get('username'); }
  get usernameLogin() { return this.loginForm.get('username'); }
  get passwordSign() { return this.signUpForm.get('password'); }
  get passwordLogin() { return this.loginForm.get('password'); }
  get confirmPassword(){return this.signUpForm.get('confirmPassword')};
  get emailSign() { return this.signUpForm.get('email'); }
  onSubmit() {
    if(this.isLogin){
      if(this.loginForm.valid){
        this.HideError = true;
        this.loginForm.reset;
        this.SetLogin(this.usernameLogin?.value);
        this.route.navigate(['/view', {isLogged: true}]);
        return;
      }
      this.HideError = false;
      return;
    }
    if(!this.isLogin){
      if(this.signUpForm.valid){
        let user:User = {
          id: getMaxID(),
          username: this.usernameSign?.value,
          email: this.emailSign?.value,
          password: this.passwordSign?.value,
        }
        addUser(user);
        console.log(users);
        this.HideError = true;
        this.signedUp = true;
        this.ChangeForLogin();
        return;
      }
      this.HideError = false;
      return;
    }
  }
  ChangeForLogin() {
    this.isLogin = true;
    this.signUpForm.reset();
  }
  ChangeForSignUp() {
    this.isLogin = false;
    this.loginForm.reset();
  }
  SetLogin(name:string){
    users.forEach(user => {
      if(user.username == name){
          user.isLogged = true;
      }
    });
  } 
}
