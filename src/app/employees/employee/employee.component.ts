import { Component, OnInit } from '@angular/core';

import {EmployeeService} from './../../shared/employee.service'
import {DepartmentService} from './../../shared/department.service'
import {NotificationService} from './../../shared/notification.service'




@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService, public departmentService: DepartmentService, public notificationService: NotificationService) { }



  ngOnInit(): void {
      // we must initialize the this.employeeList = this.db.list('employees');
      this.service.getEmployees();
  }

  onResetForm(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationService.success('Saved successfuly.');
  }

  onSubmit(){
    if(this.service.form.valid){
      // this.service.form.value will contain an object compatible with our employee service as declared in the service with :  form: FormGroup = new FormGroup( object description )
      this.service.insertEmployee(this.service.form.value);
      // reset the form after insert
      this.service.form.reset();
      this.service.initializeFormGroup();

    }
  }

}
