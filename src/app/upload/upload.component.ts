import {Component, Input, OnInit} from '@angular/core';
import {FileItem} from '../directives/file-item';
import {FirebaseService} from '../services/firebase.service';
import {AlertService} from '../services/alert-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  private appNameValue: string;
  private appDescriptionValue: string;
  private firebaseService;
  private file: FileItem;
  private types = ['Android', 'iOS'];
  private selectedType: string;
  private progressValue;
  private uploadComplete = false;

  constructor(firebaseService: FirebaseService, private router: Router) {
    this.firebaseService = firebaseService;
    this.firebaseService.progressEmitter.subscribe(value => {
      this.progressValue = value;
      console.log('Upload: ' + value);
      if (this.progressValue === 100) {
        this.uploadComplete = true;
        setTimeout(() => this.router.navigate(['/']), 2000);
      }
    });
  }

  ngOnInit() {
  }

  onFileEmit(file: FileItem) {
    this.file = file;
  }

  uploadApp() {
    if (this.file) {
      console.log(this.file);
      this.file.name = this.appNameValue;
      console.log(this.selectedType);
      this.file.type = this.selectedType;
      this.file.description = this.appDescriptionValue;
      this.firebaseService.uploadAppToFirebase(this.file);
    }
  }
}
