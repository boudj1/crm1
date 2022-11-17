import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import{ MatPaginatorModule} from '@angular/material/paginator';
import{ MatSortModule} from '@angular/material/sort';
import{ MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { MatLineModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { DatabaseModule} from '@angular/fire/database';
import {MatInputModule} from '@angular/material/input'; 
import { ClientsComponent } from './clients/clients.component';
import { ClientService } from './shared/client.service';
import { EvenementsComponent } from './evenements/evenements.component';
import { RapportsComponent } from './rapports/rapports.component';
import { DocumentsComponent } from './documents/documents.component';
import { AgnedaComponent } from './agneda/agneda.component';
import {MatRadioModule} from '@angular/material/radio'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NotificationService } from './shared/notification.service';
import { InterlocComponent } from './interloc/interloc.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { ClientComponent } from './clients/client/client.component';
import { EvenementComponent } from './evenements/evenement/evenement.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { every } from 'rxjs';
import { EditeventComponent } from './evenements/editevent/editevent.component';
import {UpclientComponent} from './clients/upclient/upclient.component';
import { InterlocuteurComponent } from './interloc/interlocuteur/interlocuteur.component';
import {DetailsComponent} from 'src/app/evenements/details/details.component';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CommonModule } from '@angular/common';
import { DemoUtilsComponent } from './agneda/demo-utils/demo-utils.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { UprapportComponent } from './rapports/uprapport/uprapport.component';
import { RapportComponent } from './rapports/rapport/rapport.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { EvenementsService } from './shared/evenements.service';
import { InterlocService } from './shared/interloc.service';
import { RapportService } from './shared/rapport.service';
import { AuthService } from './shared/auth.service';
import { AdminComponent } from './admin/admin.component';
import { UpinterlocComponent } from './interloc/upinterloc/upinterloc.component';
import { NgxPrintModule } from 'ngx-print';
import { DetailComponent } from './clients/detail/detail.component';
import { DetailrComponent } from './rapports/detailr/detailr.component';
import { todoComponent } from './todo/todo.component';
@NgModule({
  declarations: [DemoUtilsComponent,
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent,
    ClientsComponent,
    EvenementsComponent,
    RapportsComponent,
    DocumentsComponent,
    AgnedaComponent,
    DetailsComponent,
    InterlocComponent,
    FooterComponent,    
    ClientComponent, EvenementComponent, SearchFilterPipe, EditeventComponent,UpclientComponent, InterlocuteurComponent, UprapportComponent, RapportComponent, AuthentificationComponent, AdminComponent,
    UpinterlocComponent,
    DetailComponent,
    DetailrComponent,
    todoComponent,
],

  imports: [MatTableModule, CommonModule, NgxPaginationModule ,MatSortModule,MatPaginatorModule,
    BrowserModule,    FlatpickrModule.forRoot(),
    ToastrModule.forRoot(),
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatDividerModule ,
    MatLineModule,
    MatButtonModule,
    MatSidenavModule,
    HttpClientModule,
    BrowserAnimationsModule ,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatButtonToggleModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule ,
    AngularFireAuthModule ,
    DatabaseModule,
    MatGridListModule,
        MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    Ng2SearchPipeModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,  
    NgxPrintModule,  
    
  ],
  providers: [ClientService, NotificationService,EvenementsService,InterlocService,RapportService,AuthService],
  bootstrap: [AppComponent],
  entryComponents:[ EvenementComponent,ClientComponent,RapportsComponent,InterlocComponent,UpclientComponent,UpinterlocComponent,UprapportComponent,EditeventComponent],
  exports: [AgnedaComponent],
})
export class AppModule { }

