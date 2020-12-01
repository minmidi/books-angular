import { Component, OnInit } from '@angular/core';

// Import auth service Module
import { AuthService } from './../../services/auth.service';

// Import Router Module
import { Router } from '@angular/router';
import { __read } from 'tslib';

@Component({
  selector: 'app-register',
  templateUrl: './register-v2.component.html',
  styleUrls: ['./register.component.css', './register-util.component.css']
})
export class RegisterComponent implements OnInit {

  email = '';
  password = '';
  massage = '';
   // Validation error
  errorMessage = '';
  // For firebase error handle
  error: { name: string, massage: string } = { name: '', massage: '' };

  // Private auth
  constructor( private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  // Clear Error
  // tslint:disable-next-line: typedef
  clearErrorMessage()
  {
    this.errorMessage = '';
    this.error = {name: '', massage: ''};
  }

  // Register account
  // tslint:disable-next-line: typedef
  register() {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice.registerWithEmail(this.email, this.password)
        .then(() => {
          this.massage = 'you are register with data on firbase';
          // this.router.navigate(['/userinfo'])
        // tslint:disable-next-line: variable-name
        }).catch((_error: { name: string; massage: string; }) => {
          this.error = _error;
          this.router.navigate(['/register']);
        })
    }
  }

  // tslint:disable-next-line: typedef
  validateForm(email: string, password: string)
  {
    if(email.length === 0){
      this.errorMessage = 'Vui lòng nhập email';
      return false;
    }

    if(password.length === 0){
      this.errorMessage = 'Vui lòng nhập mật khẩu';
      return false;
    }

    if(password.length < 6){
      this.errorMessage = 'Mật khẩu phải có ít nhất 6 ký tự';
      return false;
    }

    this.errorMessage = '';
    return true;
  }

}
