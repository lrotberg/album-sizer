import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { Page, Photo } from "../interfaces"
import words from "../words"
import Opening from "./Opening"

export class Envelope extends Opening {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.EnvelopeName)
    this.setUnits(2)
  }

  getHeight = () => calc(this.photo.size.width, 2, CommonFractions.FiveEights)

  getWidth = () => calc(this.photo.size.height, CommonFractions.Eighth)
}