import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projet';
  sideBarOpen=true;
  constructor(public auth : AuthService){

  }
 NgOnInit(){}
  sideBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }
}
