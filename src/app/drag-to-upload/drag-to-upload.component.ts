import {Component, EventEmitter, Output} from '@angular/core';
import {FileItem} from '../directives/file-item';

@Component({
  selector: 'app-drag-to-upload',
  templateUrl: './drag-to-upload.component.html',
  styleUrls: ['./drag-to-upload.component.css']
})
export class DragToUploadComponent {
  isDropZoneOver = false;
  files: Array<FileItem> = [];
  fileDropped = false;
  @Output() fileEmitter: EventEmitter<FileItem> = new EventEmitter<FileItem>();

  public fileOverDropZone(e: any): void {
    this.isDropZoneOver = e;
  }

  public fileDrop() {
    console.log('filedrop');
    this.fileDropped = true;
    const file = this.files[0];
    console.log(file);
    this.fileEmitter.emit(file);
  }
}

