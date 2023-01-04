import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css'],
})
export class ForgotComponent {
  email: any;
  submitted = false;
  constructor(
    private fromBuider: FormBuilder,
    private user: UserService,
    private Router: Router
  ) {}

  ngOnInit(): void {}

  forgotForm = this.fromBuider.group({
    email: ['', [Validators.required, Validators.email]],
  });

  get f(): { [key: string]: AbstractControl } {
    return this.forgotForm.controls;
  }

  forgotData() {
    this.submitted = true;
    if (this.forgotForm.invalid) {
      return;
    }
    console.log(this.forgotForm.value);

    this.user.forgot(this.forgotForm.value).subscribe((res) => {
      if (res.messenger == 'Success') {
        alert(res.messenger);
        localStorage.setItem('email-reset', res.email);
        console.log(res.password);

        this.Router.navigateByUrl('/reset-password');
      } else if (res.messenger == 'Faile') {
        alert('Email not connect');
      }
    });
  }
}
