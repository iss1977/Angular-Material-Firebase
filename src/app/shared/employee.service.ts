import { Injectable, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

//Firebase imports
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit{

  constructor(
    //inject database
    private db:AngularFireDatabase
  ) { }

  //declare our employee List
  employeeList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName : new FormControl('', Validators.required),
    email : new FormControl('', Validators.email),
    mobile : new FormControl('', [Validators.required, Validators.minLength(8)]),
    city : new FormControl(''),
    gender : new FormControl('1'),
    department : new FormControl(0),
    hireDate : new FormControl(''),
    isPermanent : new FormControl(false),
  });

  ngOnInit(){
    console.log("NG ON INIT");
  }

  initializeFormGroup(){
    this.form.setValue({
      $key: null,
      fullName : '',
      email : '',
      mobile : '',
      city : '',
      gender : '1',
      department : 0,
      hireDate : '',
      isPermanent : false,
    });
  }

  //get all employees from FireDatabase
  getEmployees(){
      // select the node
      this.employeeList = this.db.list('employees');
      //return an Observable to subscribe to
      return this.employeeList.snapshotChanges();
  }

  insertEmployee(employee: any){
    this.employeeList.push({
      fullName: employee.fullName,
      email: employee.email,
      mobile: employee.mobile,
      city: employee.city,
      gender: employee.gender,
      department: employee.department,
      hireDate: employee.hireDate,
      isPermanent:  employee.isPermanent
    });
  } // end insertEmployee

  updateEmployee(employee: any){
    this.employeeList.update(employee.$key,
      {
        fullName: employee.fullName,
        email: employee.email,
        mobile: employee.mobile,
        city: employee.city,
        gender: employee.gender,
        department: employee.department,
        hireDate: employee.hireDate,
        isPermanent:  employee.isPermanent
      }
    );
  } // end of updateEmployee

  deleteEmployee($key: string){
    this.employeeList.remove($key);
  }

}
