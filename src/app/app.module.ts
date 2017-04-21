import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDS-y4iBRU06Sz35mwogo6IZdBWTEvgHN4',
  authDomain: 'app-center-3e9f1.firebaseapp.com',
  databaseURL: 'https://app-center-3e9f1.firebaseio.com',
  projectId: 'app-center-3e9f1',
  storageBucket: 'app-center-3e9f1.appspot.com',
  messagingSenderId: '946954972418'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
