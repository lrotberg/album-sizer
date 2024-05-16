import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import Opening from "./Opening"

export class Envelope extends Opening {
  getHeight = () => calc(this.photo.size.width, 2, CommonFractions.FiveEights)

  getWidth = () => calc(this.photo.size.height, CommonFractions.Eighth)
}