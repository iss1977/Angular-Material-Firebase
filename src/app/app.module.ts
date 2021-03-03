import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';

//Material components
import {MaterialModule} from './material/material.module';


//Firebase Imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
//we must import the enviroment variable also, where the firestore configuration is saved.
import {environment} from './../environments/environment';


// Reactive Forms
import {ReactiveFormsModule} from '@angular/forms'


// also add to "providers":  !!!
import {EmployeeService} from './shared/employee.service';
import {DepartmentService} from './shared/department.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //Mat compoinents
    MaterialModule,
    // Reactive forms module must be imported
    ReactiveFormsModule,
    //Angular Fire
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [EmployeeService, DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
