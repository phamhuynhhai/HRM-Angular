import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  title = 'Danh sách nhân viên';
  public href: string = '';
  username : any;
  email : any;
  constructor(private router: Router, private usersSrv:UserService) {}

  modelChanged1(e: HTMLElement, qlnv: HTMLElement) {
    e.classList.add('active');
    e.classList.remove('link-dark');
    qlnv.classList.remove('active');
    qlnv.classList.add('link-dark');
  }
  modelChanged2(e: HTMLElement, qlnv: HTMLElement) {
    e.classList.add('active');
    e.classList.remove('link-dark');
    qlnv.classList.remove('active');
    qlnv.classList.add('link-dark');
  }
  ngOnInit() {
    this.username = localStorage.getItem("name");
    this.email = localStorage.getItem("email");
    // this.href = this.router.url;
    // console.log(this.router.url);
    this.changeActive();

  }
  changeActive(){
    let qlnv = document.getElementById('qlnv') as HTMLElement;
    let qlcc = document.getElementById('qlcc') as HTMLElement;
    console.log(window.location.href);
    if (window.location.href.includes('list-timekeeping')) {
      qlcc.classList.remove('link-dark');
      qlcc.classList.add('active');
      qlnv.classList.remove('active');
      qlnv.classList.add('link-dark');
    }
  }
  onMouseEnter(hoverName: HTMLElement) {
    hoverName.style.display = 'block';
  }
  onMouseOut(hoverName: HTMLElement) {
    hoverName.style.display = 'none';
  }
  onSubmit():any{
    this.usersSrv.logout().subscribe(res=>{
      console.log(res.message)
        if(res.message == 'Successfully logged out'){
          this.router.navigateByUrl('/signin');
          localStorage.removeItem("token");
          localStorage.removeItem("name");
          localStorage.removeItem("email");
        } else {
          this.router.navigate(['logout']);
        }
    });
  }

}
