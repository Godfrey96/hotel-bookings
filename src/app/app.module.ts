import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EditDetailsComponent } from './edit-details/edit-details.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';

// import services
import { EditService } from './service/edit.service';
import { AlertifyService } from './services/alertify.service';
import { DetailsService } from './services/details.service';


@NgModule({
  declarations: [
    AppComponent,
      EditDetailsComponent,
      CardDetailsComponent,
      DisplayDetailsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    EditService,
    AlertifyService,
    DetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
