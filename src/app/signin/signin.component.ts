import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signIn = this.fbuser.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private userService: UserService,
    private fbuser: FormBuilder,
    private loginRouter: Router
  ) {}
  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.loginRouter.navigate(['logout']);
    }
  }

  onSubmit(): any {
    console.log(this.signIn.value);

    this.userService.login(this.signIn.value).subscribe(
      (res) => {
        if (res.message == 'Success') {
          console.log('Success');
          console.log(res.token);

          // this.loginRouter.navigate(['logout']);
          localStorage.setItem('token', res.token);
          localStorage.setItem('name', res.user.name);
          localStorage.setItem('email', res.user.email);
          this.loginRouter.navigateByUrl('/list-employee');
          alert('Bạn đã đăng nhập thành công');

        } else {
          console.log('Error');
          this.loginRouter.navigateByUrl('/signin');
          alert('đăng nhập thất bại');
          //this.loginRouter.navigate(['']);
        }
      },
      (err) => {
        alert('Please check Username/Password again!');
      }
    );
  }
}
