import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { IUSER } from 'src/app/viewModels/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  //Get User login
  get userLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }
  //Get User Name
  get userName(): IUSER {
    return this.userService.getUser()!;
  }
  //Logout Function event
  logout() {
    this.userService.Loggout();
    this.router.navigate(['login']);
  }
  ngOnInit(): void {}
}
