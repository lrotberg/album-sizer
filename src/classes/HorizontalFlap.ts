import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { Page, Photo } from "../interfaces"
import words from "../words"
import Opening from "./Opening"

export class HorizontalFlap extends Opening {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.HorizontalFlapName)
  }

  getHeight = () => this.page.size.height

  getWidth = () => calc(this.photo.size.height, CommonFractions.FiveEights)
}