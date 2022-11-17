import { Component, OnInit } from '@angular/core';
import { RapportComponent } from './rapport/rapport.component';
import { RapportService } from '../shared/rapport.service';
import {Sort} from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';
import { UprapportComponent } from './uprapport/uprapport.component';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { Rapport } from '../interfaces/rapport';
import { DetailrComponent } from './detailr/detailr.component';

@Component({
  selector: 'app-rapports',
  templateUrl: './rapports.component.html',
  styleUrls: ['./rapports.component.css']
})
export class RapportsComponent implements OnInit {
  public rapport!: Rapport[];
  p: number = 1;
  hideWhenNorapport: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;
  filterTerm!: string

  constructor( private dialog : MatDialog,
    private service : RapportService,
  ) {this.rapport = this.rapport? this.rapport.slice() : []; }


  ngOnInit(): void {
    this.dataState();
    let s = this.service.getrapports(); 
    s.snapshotChanges().subscribe(data => {
      this.rapport =[]
      data.forEach((item :any) => {
        let a = item.payload.toJSON(); 
        a['id'] = item.key;
        this.rapport.push(a as Rapport);
      })
  })
}

  onCreate(){
    this.dialog.open(RapportComponent);

  }
  dataState() {     
    this.service.getrapports().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNorapport= false;
        this.noData = true;
      } else {
        this.hideWhenNorapport= true;
        this.noData = false;
      }
    })
  
  }
  deleterapport(rapport :Rapport){
    if(confirm("vous voulez supprimer " +rapport.idclient+" "+rapport.typeR))
    {
      this.service.deletrapport(rapport.id);
    }
    
}
onEdit(rapport :Rapport, index:number){ 
  let dialogRef = this.dialog.open(UprapportComponent, {
    height: '550px',
    width: '600px',
    data: this.rapport[index]
    
  });}
  onDetail(rapport :Rapport, index:number){ 
    let dialogRef = this.dialog.open(DetailrComponent, {
      height: '500px',
      width: '600px',
      data: this.rapport[index]
      
    });}
  sortData(sort: Sort) {
    const data = this.rapport? this.rapport.slice(): [];
    if (!sort.active || sort.direction === '') {
      this.rapport = data;
      return;
    } this.rapport = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'idclient':
          return compare(a.idclient, b.idclient, isAsc);
        case 'nomC':
          return compare(a.nomC, b.nomC, isAsc);
        case 'wilaya':
          return compare(a.wilaya, b.wilaya, isAsc);
        default:
          return 0;
      }
    });
}
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

