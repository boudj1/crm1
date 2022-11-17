import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Interloc } from '../interfaces/interloc.module';


@Injectable({
  providedIn: 'root'
})
export class InterlocService {
  
  interlocuteurs!: AngularFireList<any>;
  interloc!: AngularFireObject<any>;
  constructor(
   public db: AngularFireDatabase
   ) { 
   }
    getinterlocdoc(id :string | null){
      this.interloc = this.db.object('interlocuteurs/' + id);
    return this.interloc;
  
    }
  
  getintrloc(){
    this.interlocuteurs= this.db.list('interlocuteurs');
    return this.interlocuteurs;
  }


  addinterloc(interloc : Interloc){
   return this.interlocuteurs.push(interloc)
    .then(_Response => {alert("interlocuteur ajoute"),console.error()});
  }
  deletInterloc(id :string){

    this.interloc= this.db.object('interlocuteurs/' + id);
  this.interloc.remove();
  
}
updateinterloc(interloc : Interloc ){
  return this.interloc.update({
    idinterloc : interloc.idinterloc,
    nom : interloc.nom,
    prenom : interloc.prenom,
    ligneD : interloc.ligneD,
    tele : interloc.tele,
    email : interloc.email,
    societe : interloc.societe,
    idclient : interloc.idclient,
    
  })
 }
}
