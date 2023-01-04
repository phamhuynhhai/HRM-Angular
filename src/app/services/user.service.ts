import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/users_list',null,options);
  }

  getByID(data:any): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/users_id/',data,options);
  }

  delete(data:any): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/users_delete/',data,options);
  }

  add(data:any): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://127.0.0.1:8000/api/register/',data,options);
  }

  update(data:any): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/users_edit/',data,options);
  }

  login(data:any): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://127.0.0.1:8000/api/login',data,options);
  }

  logout(): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://127.0.0.1:8000/api/logout/',null, options);
  }

  checkExp(): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/test/',null, options);
  }
  forgot(data : any): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://127.0.0.1:8000/api/forgot/',data, options);
  }
  reset_password(data : any, emailreset :any): Observable<any>{
    let formData = {
      data: data,
      emailreset: emailreset
    }
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://127.0.0.1:8000/api/reset_password/', formData, options);
  }
}
