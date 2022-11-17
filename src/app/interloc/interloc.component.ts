import { Component, OnInit } from '@angular/core';
import { InterlocuteurComponent } from './interlocuteur/interlocuteur.component';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { InterlocService } from '../shared/interloc.service';
import { Interloc } from '../interfaces/interloc.module';
import {Sort} from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';
import { UpinterlocComponent } from './upinterloc/upinterloc.component';

@Component({
  selector: 'app-interloc',
  templateUrl: './interloc.component.html',
  styleUrls: ['./interloc.component.css']
})
export class InterlocComponent implements OnInit {
  public interloc!: Interloc[];
  p: number = 1;
  hideWhenNointerloc: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;
  filterTerm!: string;

  constructor(
    private dialog : MatDialog,
    private service : InterlocService,
  ) {this.interloc = this.interloc? this.interloc.slice() : []; }

  ngOnInit() {
    this.dataState();
    let s = this.service.getintrloc(); 
    s.snapshotChanges().subscribe(data => {
      this.interloc =[]
      data.forEach((item :any) => {
        let a = item.payload.toJSON(); 
        a['id'] = item.key;
        this.interloc.push(a as Interloc);
      })
    })
    
  }
  
dataState() {     
  this.service.getintrloc().valueChanges().subscribe(data => {
    this.preLoader = false;
    if(data.length <= 0){
      this.hideWhenNointerloc= false;
      this.noData = true;
    } else {
      this.hideWhenNointerloc= true;
      this.noData = false;
    }
  })

}
sortData(sort: Sort) {
  const data = this.interloc? this.interloc.slice(): [];
  if (!sort.active || sort.direction === '') {
    this.interloc = data;
    return;
  } this.interloc = data.sort((a, b) => {
    const isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'nom':
        return compare(a.nom, b.nom, isAsc);
      case 'prenom':
        return compare(a.prenom, b.prenom, isAsc);
      case 'idclient':
        return compare(a.idclient, b.idclient, isAsc);
      default:
        return 0;
    }
  });
}
  onCreate(){
    this.dialog.open(InterlocuteurComponent);

  }
  deleteinterloc(interloc :Interloc){
    if(confirm("vous voulez supprimer " +interloc.nom+" "+interloc.prenom)){
      this.service.deletInterloc(interloc.id);
    }
    
}
onEdit(Evenements :Interloc, index:number){ 
  let dialogRef = this.dialog.open(UpinterlocComponent, {
    height: '500px',
    width: '600px',
    data: this.interloc[index]
    
  });}
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
