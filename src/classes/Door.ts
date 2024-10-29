import { Page, Photo } from "@/interfaces";
import words from "@/words";
import { Flap } from "@classes/Flap";

export class Door extends Flap {
  constructor(page: Page, photo: Photo) {
    super(page, photo);
    this.setName(words.DoorName);
    this.setDimensions({ part1: { ...this.getDimensions().part1, units1: 2 } })
  }
}