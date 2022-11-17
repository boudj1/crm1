import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/shared/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
public serviceform : FormGroup;
    
  constructor(
    public service :ClientService, 
    public formB : FormBuilder,
    public toastr: ToastrService
    
   
  ) { 
    this.serviceform = this.formB.group(
      {
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
        
      }
    )
  }
  type_C =[
    {id : 'none', value: 'none'},
    {id : 'client' , value: 'client'},
    {id : 'prospect' , value: 'prospect'}
  ];
  options: string[] =[ 'Adrar','Chlef','Laghouat','Oum El Bouaghi','Batna','Béjaïa','Biskra','Béchar','Blida','Bouira','Tamanrasset','Tébessa','Tlemcen','Tiaret','Tizi Ouzou','Alger','Djelfa','Jijel','Sétif','Saïda','Skikda','Sidi Bel Abbès','Annaba','Guelma','Constantine','Médéa','Mostaganem',
                       'Msila','Mascara','Ouargla','Oran','El Bayadh','Illizi','Bordj Bou Arreridj','Boumerdès','El Tarf','Tindouf','Tissemsilt','el Oued','Khenchela','Souk Ahras','Tipaza','Mila','Aïn Defla','Naâma','Aïn Témouchent','Ghardaïa','Relizane','Timimoun','Bordj Badji Mokhtar','Ouled Djellal','Béni Abbès','In Salah','In Guezzam','Touggourt','Djanet','El MGhair','El Meniaa'];
  opt: string[]=['a','b','c','d','e','f','g','h'];

  ngOnInit(){
  
    this.service.getclients;
    this.serviceform;
    

  }
  ResetForm() {
    this.serviceform.reset();

  }
      

  onSubmit(){
    this.service.pushclient(this.serviceform.value);
    this.toastr.success(
      this.serviceform.controls['NomClient'].value + ' successfully added!'
    );
    this.ResetForm();
  } 

}
 


  