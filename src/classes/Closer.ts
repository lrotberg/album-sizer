import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import words from "../words"
import Opening from "./Opening"

export class Closer extends Opening {
  getName = () => words.CloserName

  getHeight = () => calc(this.photo.size.height, CommonFractions.Eighth)

  getWidth = () => calc(this.photo.size.width, CommonFractions.Eighth)
}