import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  serviceform!: FormGroup;
  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.data();
  }
  data(){
 this.serviceform = this.fb.group({
  
    email: [''] ,
    password: [''] ,
    displayName: [''] ,
    photoURL: [''] ,
    emailVerified: [''] ,
    id: ['']
   
 }) 
  }
  SetUser(){
   
  }
}
