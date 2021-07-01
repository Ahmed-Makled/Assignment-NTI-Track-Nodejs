import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  user = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.required
    ]),
  });

  //  email: string = '';
  //password: string = '';
  errors: string[] = []
  constructor(private authService: AuthService,) {}

  ngOnInit(): void { }

  get email() {
    return this.user.get('email')
  }

  get password() {
    return this.user.get('password')
  }

  signin() {
    if (this.user.invalid) {
      if (this.email?.invalid) this.errors.push('Email Is Invalid');
      if (this.password?.invalid) this.errors.push('Password Is Invalid');
      return
    }

    this.authService.signin(this.user.value)

  }
}
