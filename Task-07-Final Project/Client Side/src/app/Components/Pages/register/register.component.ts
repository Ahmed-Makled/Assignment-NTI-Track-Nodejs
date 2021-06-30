import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name: string = ''; //Default name initial value

  email: string = ''; //Default email initial value

  password: string = ''; //Default password initial value

  constructor(private authSerivces: AuthService) {}

  register() {
    this.authSerivces.register(this.name, this.email, this.password);
  }

  ngOnInit(): void {}
}
