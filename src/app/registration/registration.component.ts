import { Component, OnInit } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  implements OnInit {
  submited: boolean = false;

  userForm = this.formBuilder.group({
    name:['',Validators.required],
    password:['',Validators.required],
    email:['',Validators.required],

  });

  constructor(private userSrv:UserService, private formBuilder:FormBuilder, public router:Router) { }

  ngOnInit(): void {
  }

  get f(){return this.userForm.controls;}
  onSubmit():any{
    this.submited = true;

    if(this.userForm.invalid){return false;}

    this.userSrv.add(this.userForm.value).subscribe(res=>{
      this.router.navigate(['/signin']);
    })
  }

}
