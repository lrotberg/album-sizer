import { Page, Photo } from "../interfaces";
import words from "../words";
import { Flap } from "./Flap";

export class Accordion extends Flap {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.AccordionName)
    this.setUnits(2)
  }
}