import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { Page, Photo } from "../interfaces.ts"
import words from "../words.ts"
import Opening from "./Opening"

export class Flap extends Opening {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.FlapName)
  }

  getHeight = () => this.page.size.height

  getWidth = () => calc(this.photo.size.width, CommonFractions.FiveEights)
}