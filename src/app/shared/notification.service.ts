import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  config:  MatSnackBarConfig
={
  duration : 3000,
  horizontalPosition : 'right',
verticalPosition:'top',
panelClass: ['green-snackbar'],


}
  constructor(public snackBar : MatSnackBar) { }

  success(msg:any){
    this.snackBar.open(msg,'');
  }
}
