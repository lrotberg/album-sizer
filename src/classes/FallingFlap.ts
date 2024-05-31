import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { Page, Photo } from "../interfaces"
import words from "../words"
import Opening from "./Opening"

export class FallingFlap extends Opening {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.FallingFlapName)
  }

  getHeight = () => calc(this.photo.size.width, CommonFractions.FiveEights)

  getWidth = () => this.page.size.width
}