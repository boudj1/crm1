import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { InterlocService } from 'src/app/shared/interloc.service';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from 'src/app/interfaces/client.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Component({
selector: 'app-interlocuteur',
templateUrl: './interlocuteur.component.html',
styleUrls: ['./interlocuteur.component.css']
})
export class InterlocuteurComponent implements OnInit {
serviceform!: FormGroup;
idc : Observable<Client[]> | Observable<any> | any;
constructor(
public service :InterlocService, 
public formB : FormBuilder,
public toastr: ToastrService,
private db : AngularFireDatabase
) { 
    this.idc = db.list('/listclient').valueChanges()
    .subscribe(idc => {
      console.log(idc); // Check the returned values;
      this.idc = idc;
    })
this.serviceform = this.formB.group({
idinterloc : [''],
nom : [''],
prenom : [''],
ligneD : [''],
tele : [''],
email : [''],
societe : [''],
idclient : [''],

});
}

ngOnInit() {
this.service.getintrloc;
this.serviceform;
}
ResetForm() {
this.serviceform.reset();

}

onSubmit(){
this.service.addinterloc(this.serviceform.value);
this.toastr.success(
this.serviceform.controls['nom'].value + ' successfully added!'
);
this.ResetForm();
}
}


