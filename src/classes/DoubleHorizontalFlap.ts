import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { Page, Photo } from "../interfaces"
import words from "../words"
import Opening from "./Opening"

export class DoubleHorizontalFlap extends Opening {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.DoubleHorizontalFlapName)
    this.setUnits(2)
  }

  getHeight = () => this.page.size.height

  getWidth = () => calc(this.photo.size.height, CommonFractions.ThreeQuarters)
}