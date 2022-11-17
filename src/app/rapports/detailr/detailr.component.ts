import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from 'src/app/interfaces/client.model';
import { Interloc } from 'src/app/interfaces/interloc.module';
import { Rapport } from 'src/app/interfaces/rapport';
import { RapportService } from 'src/app/shared/rapport.service';
import { Location } from '@angular/common';
import { NgxPrintModule } from 'ngx-print';
@Component({
  selector: 'app-detailr',
  templateUrl: './detailr.component.html',
  styleUrls: ['./detailr.component.css']
})
export class DetailrComponent implements OnInit {
  editForm!: FormGroup;
  client : Observable<Client[]> | Observable<any> | any;
interloc : Observable<Interloc[]> | Observable<any> | any;

  constructor(private crudApi: RapportService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private db : AngularFireDatabase,
    @Inject(MAT_DIALOG_DATA) public data:Rapport,
    public dialogRef: MatDialogRef<DetailrComponent>,)
     {  
      console.log('Injected data', data.id);
      
    }
    options: string[] =[ 'Adrar','Chlef','Laghouat','Oum El Bouaghi','Batna','Béjaïa','Biskra','Béchar','Blida','Bouira','Tamanrasset','Tébessa','Tlemcen','Tiaret','Tizi Ouzou','Alger','Djelfa','Jijel','Sétif','Saïda','Skikda','Sidi Bel Abbès','Annaba','Guelma','Constantine','Médéa','Mostaganem',
'Msila','Mascara','Ouargla','Oran','El Bayadh','Illizi','Bordj Bou Arreridj','Boumerdès','El Tarf','Tindouf','Tissemsilt','el Oued','Khenchela','Souk Ahras','Tipaza','Mila','Aïn Defla','Naâma','Aïn Témouchent','Ghardaïa','Relizane','Timimoun','Bordj Badji Mokhtar','Ouled Djellal','Béni Abbès','In Salah','In Guezzam','Touggourt','Djanet','El MGhair','El Meniaa'];

    ngOnInit(): void {  this.updateData();
      const id = this.data.id;
      console.log('id', this.data.id);
      this.crudApi
        .getrapport(id)
        .valueChanges()
        .subscribe((data) => {
          this.editForm.setValue(data);
        });
    }
  updateData() {
    this.editForm = this.fb.group({
      idclient : [''],
      nomC : [''],
      adress : [''],
      wilaya : [''],
      tele1 : [''],
      tele2 : [''],
      date : [''],
      typeR : [''],
      Amontant : [''],
      commentaire : [''],
      satut : [''],
      heure : [''],
      interloc : [''],
      produit  : [''],
      conclu : [''],
    })
}
goBack() {
  this.location.back();
}

DateSelected !:any;
}
