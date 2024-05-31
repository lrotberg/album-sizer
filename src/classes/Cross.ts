import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { Page, Photo } from "../interfaces"
import words from "../words"
import { Flap } from "./Flap"

export class Cross extends Flap {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.CrossName)
  }

  getHeightPart2 = () => calc(this.photo.size.width, CommonFractions.Eighth)

  getWidthPart2 = () => calc(this.page.size.width, CommonFractions.Half)
}