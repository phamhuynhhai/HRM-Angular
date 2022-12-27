import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  username: any;
  email: any;

  constructor(private usersSrv: UserService, private logoutRouter: Router) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('name');
    this.email = localStorage.getItem('email');

    if (localStorage.getItem('token') == null) {
      this.logoutRouter.navigate(['']);
    } else {
      this.usersSrv.checkExp().subscribe((res) => {
        if (res.message == 'available') {
          return;
        } else if (res.error == 'An error occurred') {
          localStorage.removeItem('token');
          localStorage.removeItem('name');
          localStorage.removeItem('email');
          this.logoutRouter.navigate(['']);
        }
      });
    }
  }

  onSubmit(): any {
    this.usersSrv.logout().subscribe((res) => {
      console.log(res.message);
      if (res.message == 'Successfully logged out') {
        this.logoutRouter.navigate(['signin']);
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
      } else {
        this.logoutRouter.navigate(['logout']);
      }
    });
  }
}
