import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AngularFireModule, AuthMethods, AuthProviders, FirebaseApp} from 'angularfire2';
import { LoginComponent } from './login/login.component';
import {FirebaseService} from './services/firebase.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonToggleModule, MdToolbarModule, MdRippleModule, MdButtonModule, MdInputModule, MdCardModule, MdRadioModule,
  MdProgressBarModule, MdIconModule, MdIconRegistry, MdGridListModule,
} from '@angular/material';
import {AlertService} from './services/alert-service.service';
import { UploadComponent } from './upload/upload.component';
import { DragToUploadComponent } from './drag-to-upload/drag-to-upload.component';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { AppListComponentComponent } from './app-list/app-list.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDS-y4iBRU06Sz35mwogo6IZdBWTEvgHN4',
  authDomain: 'app-center-3e9f1.firebaseapp.com',
  databaseURL: 'https://app-center-3e9f1.firebaseio.com',
  projectId: 'app-center-3e9f1',
  storageBucket: 'app-center-3e9f1.appspot.com',
  messagingSenderId: '946954972418'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UploadComponent,
    DragToUploadComponent,
    NgDropFilesDirective,
    AppListComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonToggleModule,
    MdRippleModule,
    MdButtonModule,
    MdInputModule,
    MdCardModule,
    MdRadioModule,
    MdProgressBarModule,
    MdIconModule,
    AppRoutingModule,
    MdGridListModule
  ],
  providers: [ FirebaseService, AlertService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
