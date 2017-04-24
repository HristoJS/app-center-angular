import {Injectable} from '@angular/core';
import {AngularFire} from 'angularfire2';
import {User} from './user';
import {Observable} from 'rxjs';

@Injectable()
export class FirebaseService {
  public user: User;
  private userList = this.af.database.list('/users');
  private currentUser;

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(user => {
      if (user) {
        this.user = new User(user.auth.uid, user.auth.displayName, user.auth.photoURL);
        // user logged in
      } else {
        // user not logged in
      }
    });
  }

  login() {
    return this.af.auth.login().then(result => this.saveUser(result.auth.uid, result.auth.displayName, result.auth.photoURL));
  }

  logout() {
    this.af.auth.logout().catch(this.handleError);
    window.location.reload();
  }

  private saveUser(id: string, name: string, image: string) {
    const userRef = this.af.database.object('/users/' + id);
    userRef.update({
      id: id,
      name: name,
      image: image,
      lastLogin: new Date()
    }).catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  isAuthenticated(): Observable<any> {
    return this.af.auth; // auth is already an observable
  }
}
