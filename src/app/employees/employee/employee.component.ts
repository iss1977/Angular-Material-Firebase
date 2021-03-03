import { Component, OnInit } from '@angular/core';

import {EmployeeService} from './../../shared/employee.service'

interface Deparment {
  id: number;
  value: string;
}



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService) { }


  departments: Deparment[] = [
    {id : 1, value: 'Deparment nr.1'},
    {id : 2, value: 'Deparment nr.2'},
    {id : 3, value: 'Deparment nr.3'},
  ]

  ngOnInit(): void {
  }

  onResetForm(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }



}
