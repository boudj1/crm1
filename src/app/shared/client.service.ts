import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Client } from '../interfaces/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  listclient!: AngularFireList<any>;
  client1!: AngularFireObject<any>;
  constructor(
   public db: AngularFireDatabase
   ) { 
   }
    
  getclientdoc(id :string){
    this.client1= this.db.object('listclient/' + id);
    return this.client1;

  }

getclients(){
  this.listclient = this.db.list('listclient');
    return this.listclient;
}

pushclient(client: Client){
  return this.listclient.push({
    idclient: client.idclient,
    ref : client.ref,
    NomClient: client.NomClient,
    rsocial : client.rsocial,
    intitule : client.intitule,
    email: client.email,
    tele1: client.tele1,
    tele2: client.tele2,
    wilaya: client.wilaya,
    adresse: client.adresse,
    siteweb: client.siteweb,
    formeleg: client.formeleg,
    capitale: client.capitale,
    commentaire: client.commentaire,
    comerciale: client.comerciale,
    secteurA: client.secteurA,
    codeP: client.codeP,
    CodeNIF: client.CodeNIF,
    CodeRC: client.CodeRC,
    type_C: client.type_C,
    coder_Inter: client.coder_Inter,
    type: client.type,
  })
  .then(_Response => {alert("client ajoute"),console.error()});
}
deletclient(id : string){

  this.client1 = this.db.object('listclient/' + id);
  this.client1.remove();
}
updateclient(client : Client ){
  return this.client1.update({
    idclient: client.idclient,
    ref : client.ref,
    NomClient: client.NomClient,
    rsocial : client.rsocial,
    intitule : client.intitule,
    email: client.email,
    tele1: client.tele1,
    tele2: client.tele2,
    wilaya: client.wilaya,
    adresse: client.adresse,
    siteweb: client.siteweb,
    formeleg: client.formeleg,
    capitale: client.capitale,
    commentaire: client.commentaire,
    comerciale: client.comerciale,
    secteurA: client.secteurA,
    codeP: client.codeP,
    CodeNIF: client.CodeNIF,
    CodeRC: client.CodeRC,
    type_C: client.type_C,
    coder_Inter: client.coder_Inter,
    type: client.type,
  }
  )

}








fetchHourlyMessages(c:string){

  
   return this.db.list( c + '/listclient/capitale' ,ref => ref.orderByChild('capitale').limitToFirst(3).equalTo('large'))
  

}




}
