import { Evenements } from './evenements';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({ providedIn: 'root',
})

export class EvenementsService {
  evenemsRef!: AngularFireList<any>;
  evenemRef!: AngularFireObject<any>;
 /*form = new FormGroup ({
  $key  : new FormControl('') ,
  label  : new FormControl('') ,
  titre :new FormControl('') ,
  description :new FormControl('') ,
  datedeb :new FormControl('') ,
  datefin :new FormControl('') ,
  ttjourne :new FormControl('') ,
  heuredeb :new FormControl('') ,
  heurfin :new FormControl('') ,
  prop :new FormControl(''),
  collab :new FormControl('') ,
  lieea :new FormControl('') ,
  elemli :new FormControl('') ,
 });*/
  constructor(private db: AngularFireDatabase, public fb: FormBuilder) {}
  Addevent(even: Evenements) {
    this.evenemsRef.push({
      label: even.label,
      titre: even.titre,
      description: even.description,
      datedeb: even.datedeb,
      datefin: even.datefin,
      ttjourne: even.ttjourne,
      heuredeb: even.heuredeb,
      heurfin:even.heurfin,
      prop:even.prop,
      collab:even.collab,
      lieea:even.lieea,
      elemli:even.elemli,
      
    });
  }
  GetEvent(id: string | null) {
    this.evenemRef= this.db.object('Evenements/' + id);
    return this.evenemRef;
  }
  GetList() {
    this.evenemsRef = this.db.list('Evenements');
    return this.evenemsRef;
  }
  UpdateEvent(even: Evenements) {
    this.evenemRef.update({ label: even.label,
      titre: even.titre,
      description: even.description,
      datedeb: even.datedeb,
      datefin: even.datefin,
      ttjourne: even.ttjourne,
      heuredeb: even.heuredeb,
      heurfin:even.heurfin,
      prop:even.prop,
      collab:even.collab,
      lieea:even.lieea,
      elemli:even.elemli,
      });
  }
  DeleteEvent(id: string) {
    this.evenemRef = this.db.object('Evenements/' + id);
    this.evenemRef.remove();
  }
}