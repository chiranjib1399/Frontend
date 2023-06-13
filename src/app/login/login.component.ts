import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  rememberMe: boolean;
  constructor() { }

  ngOnInit(): void {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    this.rememberMe = !!storedUsername && !!storedPassword;

    if (this.rememberMe) {
      this.username = storedUsername;
      this.password = storedPassword;
    }
  }
 login(){
  if (this.rememberMe) {
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }
 }

}
