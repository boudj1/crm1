import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../interfaces/todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class todoComponent implements OnInit {
  p: number = 1;
  todo!: Todo[];
  hideWhenNotodo: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;
  todos!: Todo[];
  filterTerm!: string;
  id!:string;
  constructor( public crudApi: TodoService,
    ) { }


    ngOnInit() {
      this.dataState();
      let s = this.crudApi.GetList(); 
      s.snapshotChanges().subscribe(data => {
        this.todo = [];
        data.forEach((item :any) => {
          let a = item.payload.toJSON(); 
          a['$key'] = item.key;
          this.todo.push(a as Todo);
        })
      })
    }
    
  dataState() {     
    this.crudApi.GetList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNotodo = false;
        this.noData = true;
      } else {
        this.hideWhenNotodo = true;
        this.noData = false;
      }
    })
  }
  DeletEevent(todo :any) {
    if (window.confirm('Voulez vous supprimer cet todos?')) { 
      this.crudApi.DeleteEvent(todo.$key)
    }
  }
}