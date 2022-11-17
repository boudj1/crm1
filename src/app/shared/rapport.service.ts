import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Rapport } from '../interfaces/rapport';

@Injectable({
  providedIn: 'root'
})
export class RapportService {
  
  rapports!: AngularFireList<any>;
  rapport!: AngularFireObject<any>;

  constructor(
    public db: AngularFireDatabase
   ) { 

   }

   getrapport(id :string | null){
    this.rapport = this.db.object('rapports/' + id);
     return this.rapport;}
     getrapports(){
      this.rapports= this.db.list('rapports');
      return this.rapports;
    }

    ajoutapport(rapport : Rapport){
      return this.rapports.push(rapport)
       .then(_Response => {alert("rapport ajoute"),console.error()});
     }
     deletrapport(id :string){

      this.rapport= this.db.object('rapports/' + id);
      this.rapport.remove();
      
    
  }
  updaterapport(rapport : Rapport ){
    return this.rapport.update({
      idclient : rapport.idclient,
      nomC  : rapport.nomC,
      adress : rapport.adress,
      wilaya :rapport.wilaya,
      tele1 : rapport.tele1,
      tele2 : rapport.tele2,
      date  : rapport.date,
      typeR : rapport.typeR,
      Amontant : rapport.Amontant,
      commentaire : rapport.commentaire,
      satut : rapport.satut,
      heure : rapport.heure,
      rapport : rapport.interloc,
      produit  : rapport.produit,
      conclu  : rapport.conclu
      
    })
   }
  













  }