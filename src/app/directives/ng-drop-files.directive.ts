import {Directive, EventEmitter, ElementRef, HostListener, Input, Output} from '@angular/core';
import {FileItem} from './file-item';
import * as _ from 'lodash';

@Directive({
  selector: '[appCenterDropFiles]'
})
export class NgDropFilesDirective {

  @Input() public files: Array<FileItem> = [];
  @Output() public fileOver: EventEmitter<any> = new EventEmitter();
  @Output() public onFileDrop: EventEmitter<FileItem[]> = new EventEmitter<FileItem[]>();

  private element: ElementRef;

  public constructor(element: ElementRef) {
    this.element = element;
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any): void {
    const transfer = this._getTransfer(event);
    if (!transfer) {
      return;
    }
    this._preventAndStop(event);
    this._addFiles(transfer.files);
    this.fileOver.emit(false);
    this.onFileDrop.emit(this.files);
  }

  @HostListener('draenter', ['$event'])
  public onDragEnter(event: any): void {
    this._preventAndStop(event);
    this.fileOver.emit(true);
  }

  @HostListener('dragover', ['$event'])
  public onDragOver(event: any): void {
    const transfer = this._getTransfer(event);

    transfer.dropEffect = 'copy';
    this._preventAndStop(event);
    this.fileOver.emit(true);
  }


  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any): any {
    this._preventAndStop(event);
    this.fileOver.emit(false);
  }


  private _getTransfer(event: any): any {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private _preventAndStop(event: any): any {
    event.preventDefault();
    event.stopPropagation();
  }

  private _addFiles(files: FileList): void {
    //  this.files = [];
    this.files.pop();
    this.files.push(new FileItem(files[0]));
  }
}
