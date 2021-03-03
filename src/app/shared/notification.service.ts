import { Injectable } from '@angular/core';

import { MatSnackBar,MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  config: MatSnackBarConfig={
    duration: 3000,
    horizontalPosition:'right',
    verticalPosition: 'top'
  }

  success(msg: string){
    this.snackBar.open(msg,'',this.config);
  }
}
