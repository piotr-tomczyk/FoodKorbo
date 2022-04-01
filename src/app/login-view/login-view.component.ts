import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

import { users, User } from '../users';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  signUpForm!: FormGroup;
  loginForm!: FormGroup;
  isLogin = true;
  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }
  onSubmit() {

  }
  ChangeForLogin() {
    this.isLogin = true;
  }
  ChangeForSignUp() {
    this.isLogin = false;
  }
}
