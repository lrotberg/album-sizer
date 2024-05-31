import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import words from "../words"
import Opening from "./Opening"

export class DoubleHorizontalFlap extends Opening {
  getName = () => words.DoubleHorizontalFlapName

  getHeight = () => this.page.size.height

  getWidth = () => calc(this.photo.size.height, CommonFractions.ThreeQuarters)
}