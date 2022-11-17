import { Component, OnInit , AfterViewInit, Inject} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InterlocService } from 'src/app/shared/interloc.service';
import { Location } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Interloc } from 'src/app/interfaces/interloc.module';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from 'src/app/interfaces/client.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Component({
  selector: 'app-upinterloc',
  templateUrl: './upinterloc.component.html',
  styleUrls: ['./upinterloc.component.css']
})
export class UpinterlocComponent implements OnInit {
  editForm!: FormGroup;
  idc : Observable<Client[]> | Observable<any> | any;

  constructor(private crudApi: InterlocService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private db : AngularFireDatabase,
    @Inject(MAT_DIALOG_DATA) public data:Interloc,
    public dialogRef: MatDialogRef<UpinterlocComponent>,)
     {  
      console.log('Injected data', data.id);
    this.idc = db.list('/listclient').valueChanges()
    .subscribe(idc => {
      console.log(idc); // Check the returned values;
      this.idc = idc;})
    }
    ngOnInit(): void {  this.updateData();
      const id = this.data.id;
      console.log('id', this.data.id);
      this.crudApi
        .getinterlocdoc(id)
        .valueChanges()
        .subscribe((data) => {
          this.editForm.setValue(data);
        });
    }
  updateData() {
    this.editForm = this.fb.group({
      idinterloc : [''],
      nom : [''],
      prenom : [''],
      ligneD : [''],
      tele : [''],
      email : [''],
      societe : [''],
      idclient : [''],
    })
}
goBack() {
  this.location.back();
}
updateForm() {
  this.crudApi.updateinterloc(this.editForm.value);
  this.toastr.success(
    this.editForm.controls['Nom'].value + ' updated successfully'
  );
  this.router.navigate(['interlocuteurs']);
}
}
