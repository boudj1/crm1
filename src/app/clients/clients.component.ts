import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/client.service';
import { ClientComponent } from './client/client.component';
import { ToastrService } from 'ngx-toastr';
import {Sort} from '@angular/material/sort';
import{MatDialogModule, MatDialogConfig, MatDialog} from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';
import { Client } from '../interfaces/client.model';
import { HttpClient } from '@angular/common/http';
import { UpclientComponent } from './upclient/upclient.component';
import { DetailComponent } from './detail/detail.component';
//*import { DetailComponent } from './detail/detail.component';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  p: number = 1;
  client!: Client[];
  hideWhenNoclient: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;
  filterTerm!: string;


  constructor( public crudApi: ClientService,
    public toastr: ToastrService, private dialog: MatDialog,
    ) { this.client = this.client? this.client.slice() : [];}


    ngOnInit() {
      this.dataState();
      let s = this.crudApi.getclients(); 
      s.snapshotChanges().subscribe(data => {
        this.client=[];
        data.forEach((item :any) => {
          let a = item.payload.toJSON(); 
          a['id'] = item.key;
          this.client.push(a as Client);
        })
      })
      
    }
    
  dataState() {     
    this.crudApi.getclients().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoclient= false;
        this.noData = true;
      } else {
        this.hideWhenNoclient= true;
        this.noData = false;
      }
    })
  }
  Deletclient(client : Client) {
    if (window.confirm('Voulez vous supprimer cet Client?')) { 
       this.crudApi.deletclient(client.id);
      this.toastr.success(client.NomClient + ' successfully deleted!');
    }
  }
  sortData(sort: Sort) {
    const data = this.client? this.client.slice(): [];
    if (!sort.active || sort.direction === '') {
      this.client = data;
      return;
    } this.client = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Nomclient':
          return compare(a.NomClient, b.NomClient, isAsc);
        case 'tele1':
          return compare(a.tele1, b.tele1, isAsc);
        case 'idclient':
          return compare(a.idclient, b.idclient, isAsc);
          case 'wilaya':
            return compare(a.wilaya, b.wilaya, isAsc);
    
        default:
          return 0;
      }
    });
  }
  onCreat(){
    let dialogRef = this.dialog.open(ClientComponent, {
      height: '650px',
      width: '700px',
    });
   
  }
  onEdit(Client :Client, index : number){ 
    let dialogRef = this.dialog.open(UpclientComponent, {
      height: 'auto',
      width: '600px',
      data: this.client[index]
      
    });}
    onDetail (client :Client, index:number){ 
      let dialogRef = this.dialog.open(DetailComponent, {
        height: 'auto',
        width: '600px',
        data: this.client[index]
        
      });

}
}


function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


