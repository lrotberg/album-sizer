import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { Page, Photo } from "../interfaces"
import words from "../words"
import Opening from "./Opening"

export class Pullout extends Opening {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.PulloutName)
  }

  getHeight = () => calc(this.photo.size.height, CommonFractions.Eighth)

  getWidth = () => calc(this.photo.size.width, CommonFractions.Eighth)
}