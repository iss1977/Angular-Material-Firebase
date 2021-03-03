import { Injectable } from '@angular/core';
//Firebase imports
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';



@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  departmentList: AngularFireList<any>;
  array=[];


  constructor(private db:AngularFireDatabase) {
    this.departmentList=this.db.list('departments');
    //this will convert our firebase list into an observable, so we can subscribe to it.
    this.departmentList.snapshotChanges().subscribe(
      list => {
        this.array= list.map(item => {
          return {
            $key: item.key,
            //this will create "name" and "code" from the Database.
            ...item.payload.val()
          }
        })
      }
    );
   }
}
