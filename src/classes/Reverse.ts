import { Page, Photo } from "../interfaces";
import words from "../words";
import { Flap } from "./Flap";

export class Reverse extends Flap {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.ReverseName)
  }
}