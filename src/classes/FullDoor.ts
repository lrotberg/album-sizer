import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { Page, Photo } from "../interfaces"
import words from "../words"
import Opening from "./Opening"

export class FullDoor extends Opening {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.FullDoorName)
    this.setUnits(2)
  }

  getHeight = () => this.page.size.height

  getWidth = () => calc(this.page.size.width / 2, CommonFractions.FiveEights)
}