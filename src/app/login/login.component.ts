import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {FirebaseService} from '../firebase.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FirebaseService]

})
export class LoginComponent implements OnInit, OnDestroy {
  private userName;
  private displayPicture;
  private sub: Subscription;
  private isLogged: boolean;

  constructor(private firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.sub = this.firebaseService.isAuthenticated().subscribe(auth => {
      console.log(auth);
      this.isLogged = auth;
      if (auth) {
        this.userName = auth.auth.displayName;
        this.displayPicture = auth.auth.photoURL;
      }
    });
  }

  login() {
    this.firebaseService.login();
  }

  logout() {
    this.firebaseService.logout();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
