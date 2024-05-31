import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import words from "../words"
import Opening from "./Opening"

export class FallingFlap extends Opening {
  getName = () => words.FallingFlapName

  getHeight = () => calc(this.photo.size.width, CommonFractions.FiveEights)

  getWidth = () => this.page.size.width
}