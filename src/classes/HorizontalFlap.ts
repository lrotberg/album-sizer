import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import words from "../words"
import Opening from "./Opening"

export class HorizontalFlap extends Opening {
  getName = () => words.HorizontalFlapName

  getHeight = () => this.page.size.height

  getWidth = () => calc(this.photo.size.height, CommonFractions.FiveEights)
}