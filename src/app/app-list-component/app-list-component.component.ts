import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {FileItem} from '../directives/file-item';

@Component({
  selector: 'app-list-component',
  templateUrl: './app-list-component.component.html',
  styleUrls: ['./app-list-component.component.css']
})
export class AppListComponentComponent implements OnInit {
  private apps;

  constructor(firebaseService: FirebaseService) {
    this.apps = firebaseService.getAllApps();
  }

  ngOnInit(): void {
  }
}
