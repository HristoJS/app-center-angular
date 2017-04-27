import {Inject, Injectable} from '@angular/core';
import {AngularFire, FirebaseApp} from 'angularfire2';
import {User} from '../user';
import {Observable} from 'rxjs/Observable';
import {FileItem} from '../directives/file-item';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseService {
  public user: User;
  private storageRef;
  private appList = this.af.database.list('/apps');

  constructor(public af: AngularFire, @Inject(FirebaseApp) firebaseApp: firebase.app.App) {
    this.storageRef = firebaseApp.storage().ref();
    this.af.auth.subscribe(user => {
      if (user) {
        this.user = new User(user.auth.uid, user.auth.displayName, user.auth.photoURL);
        // user logged in
      } else {
        // user not logged in
      }
    });
  }

  // Auth

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

  isAuthenticated(): Observable<any> {
    return this.af.auth; // auth is already an observable
  }

  // Storage

  uploadAppToFirebase(fileItem: FileItem) {
    console.log(fileItem);
    const context = this;
    const fileRef = this.storageRef.child(fileItem.type + '/' + fileItem.name);
    const uploadTask = fileRef.put(fileItem.file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
    }, function (error) {
      context.handleError(error);
    }, function () {
      console.log('Upload is complete');
      fileItem.downloadURL = uploadTask.snapshot.downloadURL;
      console.log(fileItem.downloadURL);
      context.saveFileDetails(fileItem);
    });
  }

  private saveFileDetails(fileItem: FileItem) {
    console.log('Am i coming here');
    this.appList.push(fileItem).then(function () {
      console.log('Saved app to db');
    }).catch(this.handleError);
  }

  // Error Handling

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
