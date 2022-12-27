import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css'],
})
export class DetailEmployeeComponent {
  employee : any = {};
  submitted = false;

  updateForm = this.fromBuider.group({
    manhanvien: ['', Validators.required],
    gender: ['', Validators.required],
    ngaysinh: ['', Validators.required],
    fullName :['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    sdt: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],
    quoctich :['', Validators.required],
    cmnd :['', [Validators.required, Validators.pattern('[0-9 ]*')]],
    nguoilienhe :['', [Validators.required]],
    sdtnguoilienhe :['', [Validators.required, Validators.pattern('[0-9 ]*')]],
    mahopdong :['', Validators.required],
    ngayhieuluc :['', Validators.required],
    ngayhethieuluc :['', Validators.required],
    loaihopdong :['', Validators.required],
    capbac :['', Validators.required],
    luong :['', [Validators.required, Validators.pattern('[0-9 ]*')]],
    hinhthuctraluong :['', Validators.required],
    phibaohiem :['', [Validators.required, Validators.pattern('[0-9 ]*')]],
    sbh :['', [Validators.required, Validators.pattern('[0-9 ]*')]],
  })
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private Router: Router,
    private fromBuider: FormBuilder
  ) {}

  get f(): { [key: string]: AbstractControl } {
    return this.updateForm.controls;
  }

  ngOnInit(): void {
    this.getDetailEmployee();
  }

  getRoute(id: any) {
    this.employeeService.find(id).subscribe((res: any) => {
      this.employee = res;
      console.log(res);
    });
  }
  updateEmployee(){
    this.submitted = true;
    if(this.updateForm.invalid){
      return
    }
    this.employeeService.updateEmployee(this.employee, this.employee.id_employee).subscribe(data => {
      alert('update thanh cong');
      this.Router.navigateByUrl('/');
    })

  }

  getDetailEmployee() {
    this.route.params.subscribe(data => {
      // console.log(data);
      this.employeeService.getEmployee(data.id).subscribe((data2) => {
        this.employee = data2;
        // console.log(data);
      });
    });
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      alert('xoa thanh cong');
      this.Router.navigateByUrl('/');
    });
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
