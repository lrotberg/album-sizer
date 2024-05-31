import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { Page, Photo } from "../interfaces"
import words from "../words"
import Opening from "./Opening"

export class Strap extends Opening {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.StrapName)
  }

  getHeight = () => calc(this.page.size.height, 1, CommonFractions.Quarter)
  getHeightPart2 = () => calc(this.photo.size.height, CommonFractions.Eighth)
  getHeightPart3 = () => calc(this.photo.size.height, CommonFractions.FiveEights)

  getWidth = () => 2
  getWidthPart2 = () => calc(this.photo.size.width, CommonFractions.Eighth)
  getWidthPart3 = () => calc(this.photo.size.width, CommonFractions.Eighth)
}