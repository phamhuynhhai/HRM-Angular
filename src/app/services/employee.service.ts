import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, tap, catchError } from 'rxjs';
import { Employee } from '../models/employee.model';
import { ListTimekeeping } from '../models/listTimekeeping.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
};
const apiListEmployee = 'http://127.0.0.1:8000/api/listEmployee';
const apiTimekeeping = 'http://127.0.0.1:8000/api/timekeeping_list';
const apiEmployee = 'http://127.0.0.1:8000/api/employee';
const apiAddTimekeeping = 'http://127.0.0.1:8000/api/timekeeping';
const apiEmployeeId = 'http://127.0.0.1:8000/api/employee/:id';
const apiListYear = 'http://127.0.0.1:8000/api/listYear';
const apiListRank = 'http://127.0.0.1:8000/api/listRank';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  find(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${apiListEmployee}/${id}`).pipe();
  }
  getListEmployee(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(apiListEmployee).pipe();
  }

  insertEmployee(data: any) {
    return this.httpClient.post(apiEmployee, data);
  }

  deleteEmployee(id: number) {
    return this.httpClient.delete(`${apiEmployee}/${id}`);
  }

  getEmployee(id: number) {
    return this.httpClient.get(`${apiEmployee}/${id}`);
  }

  updateEmployee(data: any, id: number) {
    return this.httpClient.put(`${apiEmployee}/${id}`, data);
  }

  getTimekeeping(): Observable<ListTimekeeping[]> {
    return this.httpClient
      .get<ListTimekeeping[]>(apiTimekeeping)
      .pipe //pipe trả về dữ liệu response trc
      // tap(receivedApi => console.log(`receiveApi = ${JSON.stringify(receivedApi)}`)),
      // catchError(error => of([]))
      ();
  }

  postTimekeeping(data: any) {
    let formData = {
      data: data,
    }
    console.log(data);

    return this.httpClient.post(apiAddTimekeeping, formData);
  }
  getListYear(){
    return this.httpClient.get(apiListYear);
  }

  getListRank(){
    return this.httpClient.get(apiListRank);
  }
  // getdata(){
  //   return this.httpClient.get(apiListEmployee);
  // }
}
