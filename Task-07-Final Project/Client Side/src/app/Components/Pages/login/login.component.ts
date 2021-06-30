import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = ''; //Default email initial value
  password: string = ''; //Default password initial value

  constructor(private authService: AuthService) {}

  //login function event
  login() {
    this.authService.login(this.email, this.password);
  }
  ngOnInit(): void {}
}
