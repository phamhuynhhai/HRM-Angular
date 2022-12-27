import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  employee = new Employee();
  submitted = false;

  createForm = this.fromBuider.group({
    manhanvien: ['', Validators.required],
    gender: ['', Validators.required],
    ngaysinh: ['', Validators.required],
    fullName: [
      '',
      [Validators.required],
    ],
    email: ['', [Validators.required, Validators.email]],
    sdt: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],
    quoctich: ['', Validators.required],
    cmnd: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],
    nguoilienhe: [
      '',
      [Validators.required],
    ],
    sdtnguoilienhe: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],
    mahopdong: ['', Validators.required],
    ngayhieuluc: ['', Validators.required],
    ngayhethieuluc: ['', Validators.required],
    loaihopdong: ['', Validators.required],
    capbac: ['', Validators.required],
    luong: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],
    hinhthuctraluong: ['', Validators.required],
    phibaohiem: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],
    sbh: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],
  });
  constructor(
    private employeeService: EmployeeService,
    private Router: Router,
    private fromBuider: FormBuilder
  ) {}
  ngOnInit(): void {}

  get f(): { [key: string]: AbstractControl } {
    return this.createForm.controls;
  }
  insertData() {
    this.submitted = true;
    if (this.createForm.invalid) {
      return;
    }
    this.employeeService.insertEmployee(this.employee).subscribe((res) => {
      this.Router.navigateByUrl('/');
    });
    console.log(this.employee);
  }
  onReset() {
    this.submitted = false;
    this.createForm.reset();
  }

  onMouseEnter(hoverName: HTMLElement) {
    hoverName.style.display = 'block';
  }
  onMouseOut(hoverName: HTMLElement) {
    hoverName.style.display = 'none';
  }
  modelChanged(e: any, upload: any) {
    const choosedFile = e.target.files[0];
    if (choosedFile) {
      const reader = new FileReader();
      reader.addEventListener('load', function () {
        upload.setAttribute('src', reader.result);
      });
      reader.readAsDataURL(choosedFile);
    }
  }
}

