import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from 'src/app/interfaces/client.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { RapportService } from 'src/app/shared/rapport.service';
import { Interloc } from 'src/app/interfaces/interloc.module';
import { ClientsComponent } from 'src/app/clients/clients.component';


@Component({
selector: 'app-rapport',
templateUrl: './rapport.component.html',
styleUrls: ['./rapport.component.css'],
providers :[ClientsComponent]
})
export class RapportComponent implements OnInit {
serviceform!: FormGroup;
client : Observable<Client[]> | Observable<any> | any;
interloc : Observable<Interloc[]> | Observable<any> | any;

constructor(
public service :RapportService, 
public formB : FormBuilder,
public toastr: ToastrService,
public db : AngularFireDatabase

) { 
  this.client = db.list('/listclient').valueChanges()
    .subscribe(data => {
      console.log(data); // Check the returned values;
      this.client = data;
    })
    this.interloc = db.list('/interlocuteurs').valueChanges()
    .subscribe(data => {
      console.log(data); // Check the returned values;
      this.interloc = data;
    })
  
this.serviceform = this.formB.group({
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


});
}
options: string[] =[ 'Adrar','Chlef','Laghouat','Oum El Bouaghi','Batna','Béjaïa','Biskra','Béchar','Blida','Bouira','Tamanrasset','Tébessa','Tlemcen','Tiaret','Tizi Ouzou','Alger','Djelfa','Jijel','Sétif','Saïda','Skikda','Sidi Bel Abbès','Annaba','Guelma','Constantine','Médéa','Mostaganem',
'Msila','Mascara','Ouargla','Oran','El Bayadh','Illizi','Bordj Bou Arreridj','Boumerdès','El Tarf','Tindouf','Tissemsilt','el Oued','Khenchela','Souk Ahras','Tipaza','Mila','Aïn Defla','Naâma','Aïn Témouchent','Ghardaïa','Relizane','Timimoun','Bordj Badji Mokhtar','Ouled Djellal','Béni Abbès','In Salah','In Guezzam','Touggourt','Djanet','El MGhair','El Meniaa'];


ngOnInit() {
  this.service.getrapports();
  this.serviceform;
}
ResetForm() {
  this.serviceform.reset();
  
  }
  onSubmit(){
    this.service.ajoutapport(this.serviceform.value);
    this.toastr.success(
      this.serviceform.controls['idclient'].value + ' successfully added!'
    );
    this.ResetForm();
  }


DateSelected !:any;
}

