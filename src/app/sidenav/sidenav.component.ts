import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {
  role !: boolean;
  constructor(public auth :AuthService) {
   
    
    
   }

  ngOnInit(){ 
    this.role =this.auth.ChekRole('admin@gmail.com');
  }

}
