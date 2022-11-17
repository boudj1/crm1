import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgnedaComponent } from './agneda/agneda.component';
import { ClientsComponent } from './clients/clients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentsComponent } from './documents/documents.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { HomeComponent } from './home/home.component';
import { InterlocComponent } from './interloc/interloc.component';
import { RapportsComponent } from './rapports/rapports.component';
import { ClientComponent } from './clients/client/client.component';
import { EvenementComponent } from './evenements/evenement/evenement.component';
import { EditeventComponent } from './evenements/editevent/editevent.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  {path: '', redirectTo:'dashboard', pathMatch:'full'},
  {path: 'client', component: ClientComponent,canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard]},
  {path: 'evenements', component: EvenementsComponent,canActivate: [AuthGuard]},
  {path: 'agenda', component: AgnedaComponent,canActivate: [AuthGuard]},
  {path: 'documents', component: DocumentsComponent,canActivate: [AuthGuard]},
  {path: 'interloc', component: InterlocComponent,canActivate: [AuthGuard]},
  {path: 'rapports', component: RapportsComponent,canActivate: [AuthGuard]},
  {path: 'clients', component: ClientsComponent,canActivate: [AuthGuard]},
  {path: 'evenement', component: EvenementComponent,canActivate: [AuthGuard]},
  {path: 'editevent', component: EditeventComponent,canActivate: [AuthGuard]},
 
  {path: '', redirectTo:'Authentification', pathMatch:'full'},
  {path: 'Authentification', component: AuthentificationComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
 


];0.0

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
