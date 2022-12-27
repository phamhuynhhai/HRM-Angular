import { Component, ContentChild, OnInit } from '@angular/core';
import { ListEmployee } from '../models/listEmployee.model';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
})
export class ListEmployeeComponent implements OnInit {

  datas : ListEmployee[] = [];
  dataMain: any;
  dataSearch : ListEmployee[] = [];
  array : ListEmployee[] = [];

  searchText: any;

  ranks: any;
  dataRanks: any;
  dataStatus: any;

  currentPage  = 1;
  collectionSize :number;
  pageSize = 10;


  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getAll();
    this.getListRank();

  }

  getAll() {
    this.employeeService.getListEmployee().subscribe((res: any) => {
      this.datas = res;
      this.dataSearch = res;
      this.dataMain = res;
      this.array = res;
      this.collectionSize = this.array.length;
      this.iterator();
    });
  }

  getListRank() {
    this.employeeService.getListRank().subscribe((res: any) => {
      this.ranks = res;
    });
  }

  type_rank(rank: any) {
    this.array = this.dataStatus || this.dataMain;
    this.array = this.array.filter((p) => p.rank == rank);
    this.dataRanks = this.array || this.dataMain;
    this.iterator();
  }

  type_status(status: any) {
    this.array = this.dataRanks || this.dataMain;
    this.array = this.array.filter((p) => p.status == status);
    this.dataStatus = this.array || this.dataMain;
    this.iterator();
  }

  removeFilter(e: any) {
    this.array = this.dataMain;
    this.dataRanks = this.array;
    this.dataStatus = this.array;
    this.iterator();
  }

  private iterator() {
    const end = (this.currentPage) * this.pageSize;
    const start = (this.currentPage - 1) * this.pageSize;
    const part = this.array.slice(start, end);
    this.datas = part;
  }

  public handlePage() {
    this.iterator();
  }

  filter(){
    this.array = [...this.dataSearch.filter(item => item.full_name.includes(this.searchText))];
    this.iterator();
  }

}
