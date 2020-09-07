import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error = null;

  onSwitchLogin() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    //in case where the user would 'hack' the disable button into the browser tools
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;

    if (this.isLoginMode) {
      //...
    } else {
      this.authService.signUp(email, password).subscribe((responseData) => {
        console.log(responseData);
        this.isLoading = false;
      }, (errorData) => {
        this.error = 'An error occur ! : ', errorData;
        this.isLoading = false;
      });
      this.isLoading = true;

      form.reset();
    }
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
