import { Todo } from '../interfaces/todo';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({ providedIn: 'root',
})

export class TodoService {
  evenemsRef!: AngularFireList<any>;
  evenemRef!: AngularFireObject<any>;
 /*form = new FormGroup ({
  $key  : new FormControl('') ,
  label  : new FormControl('') ,
  titre :new FormControl('') ,
  description :new FormControl('') ,
  datedeb :new FormControl('') ,
  datefin :new FormControl('') ,
  ttjourne :new FormControl('') ,
  heuredeb :new FormControl('') ,
  heurfin :new FormControl('') ,
  prop :new FormControl(''),
  collab :new FormControl('') ,
  lieea :new FormControl('') ,
  elemli :new FormControl('') ,
 });*/
  constructor(private db: AngularFireDatabase, public fb: FormBuilder) {}
  Addevent(even: Todo) {
    this.evenemsRef.push({
      task: even.task,
     
      
    });
  }
  GetEvent(id: string | null) {
    this.evenemRef= this.db.object('Todo/' + id);
    return this.evenemRef;
  }
  GetList() {
    this.evenemsRef = this.db.list('Todo');
    return this.evenemsRef;
  }
  
  DeleteEvent(id: string) {
    this.evenemRef = this.db.object('Todo/' + id);
    this.evenemRef.remove();
  }
}