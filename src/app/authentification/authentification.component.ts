import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-athentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  value:Boolean = false

  constructor(
    public authService: AuthService) {}
  ngOnInit(): void {}

  
}

