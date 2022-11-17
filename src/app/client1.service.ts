import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Client } from './interfaces/client.model';

@Injectable({
  providedIn: 'root'
})
export class Client1Service {
  clientlist! :AngularFireList<any>;
  client !:Client[];

  constructor(private db :AngularFireDatabase) { 
    this.clientlist = this.db.list('listclient');
    this.clientlist.snapshotChanges().subscribe(data => {
      data.forEach((item :any) => {
        this.client= [];
        let a = item.payload.toJSON(); 
        a['id'] = item.key;
        this.client.push(a as Client);
      })})
  }
}
