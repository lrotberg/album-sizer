import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { Page, Photo } from "../interfaces"
import words from "../words"
import { Flap } from "./Flap"

export class Mixed extends Flap {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.MixedName)
  }

  getHeightPart2 = () => calc(this.page.size.height, CommonFractions.FiveEights)

  getWidthPart2 = () => calc(this.photo.size.width, CommonFractions.Eighth)
}