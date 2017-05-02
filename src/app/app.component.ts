import {Component} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  public isUploadActive = false;
  public isLogged = false;

  constructor(private router: Router) {
  }

  toggleUploadScreen() {
    const url = this.router.url === '/' ? '/upload' : '/';
    this.router.navigate([url])
      .then(() => {
        this.isUploadActive = !this.isUploadActive;
        console.log(this.isUploadActive);
      })
      .catch(reason => console.log('Unable to load upload panel: ' + reason));
  }

  onLogin(isLogged: boolean) {
    this.isLogged = isLogged;
  }
}
