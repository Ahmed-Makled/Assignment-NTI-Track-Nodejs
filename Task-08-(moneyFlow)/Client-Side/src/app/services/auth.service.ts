import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthRes {
  user: User;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }
  baseUrl: string = 'http://localhost:3000/auth'
  signin(data: { email: string, password: string }) {
    this.http.post<AuthRes>(`${this.baseUrl}/signin`, data).subscribe(
      data => {
        this.userService.setUser(data);
        this.router.navigate(['/'])
      },
      err => console.log(err)
    );
  }

  signup(data: { name: string, email: string, password: string }) {
     this.http.post(`${this.baseUrl}/signup`, data).subscribe(
       (data) => {
         console.log(data)
         this.router.navigate(['signin'])
       },
       (err) => console.log(err)
     );
  }
}
