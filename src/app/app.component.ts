import {Component, Inject} from '@angular/core';
import {FirebaseApp, FirebaseListObservable} from 'angularfire2';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  constructor(@Inject(FirebaseApp) firebaseApp: firebase.app.App) {
    const storageRef = firebaseApp.storage().ref().child('images/image.png');
    // storageRef.put(file)...
  }
}
