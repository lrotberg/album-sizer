import { Page, Photo } from "../interfaces";
import words from "../words";
import { Flap } from "./Flap";

export class Door extends Flap {
  constructor(page: Page, photo: Photo) {
    super(page, photo);
    this.setName(words.DoorName);
    this.setUnits(2);
  }
}