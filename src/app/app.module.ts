import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AngularFireModule, AuthMethods, AuthProviders} from 'angularfire2';
import { LoginComponent } from './login/login.component';
import {FirebaseService} from './firebase.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonToggleModule, MdToolbarModule, MdRippleModule, MdButtonModule,
} from '@angular/material';

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
    LoginComponent
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
  ],
  providers: [ FirebaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
