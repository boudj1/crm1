import { Component, EventEmitter, OnInit } from '@angular/core';
import {Output} from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() toggleSidebarForMe: EventEmitter <any> = new EventEmitter();
  constructor(
    public authservice :AuthService
  ) { }

  ngOnInit(): void {}
  toggleSideBar(){
    this.toggleSidebarForMe.emit();
  }
}