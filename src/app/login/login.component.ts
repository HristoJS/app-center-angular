import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FirebaseService]

})
export class LoginComponent implements OnInit, OnDestroy {
  public userName;
  public displayPicture;
  public sub: Subscription;
  public isLogged: boolean;
  @Output() isLoggedEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.sub = this.firebaseService.isAuthenticated().subscribe(auth => {
      console.log(auth);
      this.isLogged = auth;
      this.isLoggedEmitter.emit(auth);
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
