
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.required,
    ]),
  });

  //  email: string = '';
  //password: string = '';
  errors: string[] = [];
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  get name() {
    return this.user.get('name');
  }

  get email() {
    return this.user.get('email');
  }

  get password() {
    return this.user.get('password');
  }

  singup() {

    if (this.user.invalid) {
      if (this.email?.invalid) this.errors.push('Email Is Invalid');
      if (this.name?.invalid) this.errors.push('Name Is Invalid');
      if (this.password?.invalid) this.errors.push('Password Is Invalid');

      return;
    }


  this.authService.signup(this.user.value)

  }
}
