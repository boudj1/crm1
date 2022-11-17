import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EvenementsService } from '../shared/evenements.service';
import { Evenements } from '../interfaces/evenements.module'; 
import { ToastrService } from 'ngx-toastr';
import {Sort} from '@angular/material/sort';
import{MatDialogModule, MatDialogConfig,MAT_DIALOG_DATA , MatDialog} from '@angular/material/dialog';
import { EvenementComponent } from './evenement/evenement.component';
import { DialogRef } from '@angular/cdk/dialog';
import { InterlocComponent } from '../interloc/interloc.component';
import { EditeventComponent } from './editevent/editevent.component';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css'],
  providers :[InterlocComponent]
})
export class EvenementsComponent implements OnInit {
  p: number = 1;
  Evenements!: Evenements[];
  hideWhenNoevenements: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;
  Evenement!: Evenements[];
  filterTerm!: string;

  constructor( public crudApi: EvenementsService,
    public toastr: ToastrService, public dialog: MatDialog,
    ) { this.Evenements = this.Evenements? this.Evenements.slice() : [];}


    ngOnInit() {
      this.dataState();
      let s = this.crudApi.GetList(); 
      s.snapshotChanges().subscribe(data => {
        this.Evenements = [];
        data.forEach((item :any) => {
          let a = item.payload.toJSON(); 
          a['$key'] = item.key;
          this.Evenements.push(a as Evenements);
        })
      })
    }
    
  dataState() {     
    this.crudApi.GetList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoevenements = false;
        this.noData = true;
      } else {
        this.hideWhenNoevenements = true;
        this.noData = false;
      }
    })
  }
  DeletEevent(evenements :any) {
    if (window.confirm('Voulez vous supprimer cet Evenement?')) { 
      this.crudApi.DeleteEvent(evenements.$key)
      this.toastr.success(evenements.label + 'successfully deleted!');
    }
  }
  sortData(sort: Sort) {
    const data = this.Evenements? this.Evenements.slice(): [];
    if (!sort.active || sort.direction === '') {
      this.Evenements = data;
      return;
    } this.Evenements = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'label':
          return compare(a.label, b.label, isAsc);
        case 'datedeb':
          return compare(a.datedeb, b.datedeb, isAsc);
        case 'titre':
          return compare(a.titre, b.titre, isAsc);
    
        default:
          return 0;
      }
    });
  }
  onCreat(){
    let dialogRef = this.dialog.open(EvenementComponent, {
      height: '500px',
      width: '600px',
    });
   
    
  }
 

  onEdit(Evenements :Evenements, index:number){ 
    let dialogRef = this.dialog.open(EditeventComponent, {
      height: '500px',
      width: '600px',
      data: this.Evenements[index]
      
    });}
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

