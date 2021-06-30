import { Injectable } from '@angular/core';
import { IAuthResLogin } from '../viewModels/auth-res-login';
import { IUSER } from '../viewModels/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  //Set_User_Data
  setUser(data: IAuthResLogin) {
    const dataString = JSON.stringify(data.user); // convert user data to string
    window.localStorage.setItem('user', dataString); // set user data  in local storage
    window.localStorage.setItem('token', `Bearer ${data.token}`); // set token data  in local storage
  }

  //---------------------------------------------- Get_USer -------------------------------//

  getUser(): IUSER | null {
    const userData = window.localStorage.getItem('user');

    if (userData) {
      const user: IUSER = JSON.parse(userData);
      return user;
    } else {
      return null;
    }
  }
  //---------------------------------------------- Get_Token -------------------------------//

  getToken() {
    return window.localStorage.getItem('token')!;
  }
  // is_loggedIn
  //----------------------------------------------LOggin -------------------------------//

  isLoggedIn(): boolean {
    return !!this.getUser();
  }
  //---------------------------------------------- LogOut -------------------------------//

  Loggout() {
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
  }
}
