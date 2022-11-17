import { Component, OnInit ,Inject, AfterViewInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EvenementsService } from 'src/app/shared/evenements.service';
import { Location } from '@angular/common';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import { Evenements } from 'src/app/shared/evenements';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  editForm!: FormGroup;

  constructor(private crudApi: EvenementsService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data:Evenements,
    public dialogRef: MatDialogRef<DetailsComponent>,) {  console.log('Injected data', data.$key)}

  ngOnInit(): void {  this.updateData();
    const id = this.data.$key;
    console.log('key', this.data.$key);
    this.crudApi
      .GetEvent(id)
      .valueChanges()
      .subscribe((data) => {
        this.editForm.setValue(data);
      });
  }
  updateData() {
    this.editForm = this.fb.group({
  label  : [''] ,
  titre :[''] ,
  description :[''] ,
  datedeb :[''] ,
  datefin :[''] ,
  ttjourne :[''] ,
  heuredeb :[''] ,
  heurfin :[''] ,
  prop :[''],
  collab :[''] ,
  lieea :[''] ,
  elemli :[''] ,
    })
}
goBack() {
  this.router.navigate(['evenements'])
}

DateSelected :any;
DateSelected1:any;
}
