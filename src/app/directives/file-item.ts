/**
 * Created by hristo.stoyanov on 25-Apr-17.
 */
export class FileItem {

  public file: File;
  public name = '';
  public type = '';
  public description = '';
  public downloadURL = '';

  public constructor(file: File) {
    this.file = file;
  }
}
