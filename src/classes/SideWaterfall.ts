import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { Page, Photo } from "../interfaces"
import words from "../words"
import Opening from "./Opening"

export class SideWaterfall extends Opening {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.SideWaterfallName)
  }

  getHeight = () => this.page.size.height

  getWidth = () => calc(this.photo.size.width, 1, CommonFractions.Eighth)
}