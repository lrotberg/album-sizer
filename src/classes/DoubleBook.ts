import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import words from "../words"
import Opening from "./Opening"

export class DoubleBook extends Opening {
  getName = () => words.DoubleBookName

  getHeight = () => calc(this.page.size.height, CommonFractions.ThreeQuarters)

  getWidth = () => calc(this.photo.size.width, CommonFractions.Eighth)
}