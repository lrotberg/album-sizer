import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { CloserName } from "../words.json"
import Opening from "./Opening"

export class Closer extends Opening {
  getName = () => CloserName

  getHeight = () => calc(this.photo.size.height, CommonFractions.Eighth)

  getWidth = () => calc(this.photo.size.width, CommonFractions.Eighth)
}