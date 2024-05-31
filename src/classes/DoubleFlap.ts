import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import words from "../words"
import Opening from "./Opening"

export class DoubleFlap extends Opening {
  getName = () => words.DoubleFlapName

  getHeight = () => this.page.size.height

  getWidth = () => calc(this.photo.size.width, CommonFractions.ThreeQuarters)
}