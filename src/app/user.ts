/**
 * Created by hristo.stoyanov on 24-Apr-17.
 */
export class User {
  id: number;
  name: string;
  image: string;
  constructor(id, name, image) {
    this.id = id;
    this.name = name;
    this.image = image;
  }
}
