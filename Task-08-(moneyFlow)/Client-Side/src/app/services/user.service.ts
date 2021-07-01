import { AuthRes } from './auth.service';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  setUser(data: AuthRes) {
    const userAsString = JSON.stringify(data.user)
    window.localStorage.setItem('user', userAsString)
    window.localStorage.setItem('token', `Bearer ${data.token}`)
  }
  getUser() {
    return window.localStorage.getItem('user')
  }
  getToken(): string {
    return window.localStorage.getItem('token')!
  }
  isLoggedIn():boolean {
    return !!this.getUser()
  }
  clear() {
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
  }
}
