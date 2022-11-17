import { Component, OnInit } from '@angular/core';
import { EvenementsService } from 'src/app/shared/evenements.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { InterlocComponent } from 'src/app/interloc/interloc.component';
import { Interloc } from 'src/app/interfaces/interloc.module';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css'],
  providers:[InterlocComponent],
})
export class EvenementComponent implements OnInit {
  public eventForm!: FormGroup;
  coolb: Observable<Interloc[]> | Observable<any> | any;

  constructor(    public crudApi: EvenementsService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    public collab : InterlocComponent,
    private db : AngularFireDatabase) {  this.coolb = db.list('/interlocuteurs').valueChanges()
    .subscribe(coolb => {
      console.log(coolb); 
      this.coolb = coolb;
    })}

  ngOnInit(): void { this.crudApi.GetList();
    this.eventform();
  }
  eventform() {
    this.eventForm = this.fb.group({
    label  : [''],
     titre : [''],
     description : [''],
     datedeb : [''],
     datefin : [''],
     ttjourne : [''],
     heuredeb : [''],
     heurfin : [''],
     prop : [''],
     collab : [''],
     lieea : [''],
     elemli : [''],
    });
  }
 
  ResetForm() {
    this.eventForm.reset();
  }
  submitevent() {
    this.crudApi.Addevent(this.eventForm.value);
    this.toastr.success(
      this.eventForm.controls['titre'].value + ' successfully added!'
    );
    this.ResetForm();
  } 

  
DateSelected :any;
DateSelected1:any;
}
