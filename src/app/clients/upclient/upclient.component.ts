import { Component, OnInit , AfterViewInit, Inject} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/shared/client.service';
import { Location } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/interfaces/client.model';
@Component({
  selector: 'app-upclient',
  templateUrl: './upclient.component.html',
  styleUrls: ['./upclient.component.css']
})
export class UpclientComponent implements OnInit {
  editForm!: FormGroup;

  constructor(private crudApi: ClientService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data:Client,
    public dialogRef: MatDialogRef<UpclientComponent>,) { }

  ngOnInit(): void {  this.updateData();
    const id = this.data.id;
    console.log('id', this.data.id);
    this.crudApi
      .getclientdoc(id)
      .valueChanges()
      .subscribe((data) => {
        this.editForm.setValue(data);
      });
  }
  updateData() {
    this.editForm = this.fb.group({
      idclient: [''],
      ref :[''],
     NomClient: [''],
      rsocial : [''],
     intitule: [''],
     email: [''],
      tele1: [''],
      tele2: [''],
      wilaya: [''],
     adresse: [''],
     siteweb: [''],
     formeleg: [''],
     capitale: [''],
    commentaire: [''],
     comerciale: [''],
     secteurA: [''],
     codeP: [''],
     CodeNIF: [''],
     CodeRC: [''],
     type_C: [''],
     coder_Inter: [''],
     type: [''],
    })
}

type_C =[
  {id : 'none', value: 'none'},
  {id : 'client' , value: 'client'},
  {id : 'prospect' , value: 'prospect'}
];
options: string[] =[ 'Adrar','Chlef','Laghouat','Oum El Bouaghi','Batna','Béjaïa','Biskra','Béchar','Blida','Bouira','Tamanrasset','Tébessa','Tlemcen','Tiaret','Tizi Ouzou','Alger','Djelfa','Jijel','Sétif','Saïda','Skikda','Sidi Bel Abbès','Annaba','Guelma','Constantine','Médéa','Mostaganem',
                     'Msila','Mascara','Ouargla','Oran','El Bayadh','Illizi','Bordj Bou Arreridj','Boumerdès','El Tarf','Tindouf','Tissemsilt','el Oued','Khenchela','Souk Ahras','Tipaza','Mila','Aïn Defla','Naâma','Aïn Témouchent','Ghardaïa','Relizane','Timimoun','Bordj Badji Mokhtar','Ouled Djellal','Béni Abbès','In Salah','In Guezzam','Touggourt','Djanet','El MGhair','El Meniaa'];
opt: string[]=['a','b','c','d','e','f','g','h'];

goBack() {
  this.location.back();
}
updateForm() {
  this.crudApi.updateclient(this.editForm.value);
  this.toastr.success(
    this.editForm.controls['Nomclient'].value + ' updated successfully'
  );
  this.router.navigate(['listclient']);
}
}