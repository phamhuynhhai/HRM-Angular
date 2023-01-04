import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { validateNotEmpty } from 'validation-utils';
import ValidationError from 'validation-utils/dist/lib/ValidationError';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  submitted = false;
  comparePassword(c: AbstractControl) {
    const v = c.value;
      return (v.new_password === v.confirm_password) ? null : {
        Mustmatch : true
      };
  }
  Mustmatch(password:any, conpassword:any){
    return (formGroup : FormGroup) => {
      const passwordcontrol = formGroup.controls[password];
      const conpasswordcontrol = formGroup.controls[conpassword];

      if (conpasswordcontrol.errors && !conpasswordcontrol.errors['Mustmatch']){
        return;
      }

      if (passwordcontrol.value !== conpasswordcontrol.value){
        conpasswordcontrol.setErrors({ Mustmatch :true});
      } else {
        conpasswordcontrol.setErrors(null);
      }
    }
  }


  resetpassword = this.fbuser.group(
    {
      new_password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    },
    {
      validator: this.Mustmatch('new_password', 'confirm_password')
    }
  );
  constructor(
    private userService: UserService,
    private fbuser: FormBuilder,
    private loginRouter: Router
  ) {}

  // get f(): { [key: string]: AbstractControl } {
  //   return this.resetpassword.controls;
  // }
  get f() {
    return this.resetpassword.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.resetpassword.invalid) {
      return;
    }
    console.log(this.resetpassword.value.confirm_password);

    const emailReset = localStorage.getItem('email-reset');
    console.log(emailReset);

    // this.userService
    //   .reset_password(this.resetpassword.value.confirm_password, emailReset)
    //   .subscribe((res) => {
    //     console.log(this.resetpassword.value, emailReset);
    //     if (res.messenger == 'Success') {
    //       alert('Thay đổi mật khẩu thành công');
    //       this.loginRouter.navigateByUrl('/signin');
    //     } else {
    //       alert('Thay đổi mật khẩu thất bại');
    //     }
    //   });
  }
}
