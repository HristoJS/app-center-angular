import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponentComponent implements OnInit {
  public apps;

  constructor(firebaseService: FirebaseService) {
    this.apps = firebaseService.getAllApps();
  }

  ngOnInit(): void {
  }
}
