import {Component} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  constructor() {
  }
}
