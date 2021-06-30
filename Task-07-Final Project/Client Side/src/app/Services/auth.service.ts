import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAuthResLogin } from '../viewModels/auth-res-login';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private UserService: UserService,
    private router: Router
  ) {}
  baseURL = 'http://localhost:8000/user';

  //---------------------------------------------- Register -------------------------------//

  register(name: string, email: string, password: string) {
    this.http
      .post(`${this.baseURL}/register`, {
        name,
        email,
        password,
      })
      .subscribe(
        (data) => {
          this.router.navigate(['todo']);
        },
        (err) => console.log(err)
      );
  }

  //---------------------------------------------- Login -------------------------------//

  login(email: string, password: string) {
    this.http
      .post<IAuthResLogin>(`${this.baseURL}/login`, {
        email,
        password,
      })
      .subscribe(
        (data) => {
          this.UserService.setUser(data);
          this.router.navigate(['todo']);
        },
        (err) => console.log(err)
      );
  }
}
