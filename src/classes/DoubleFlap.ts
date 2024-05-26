import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { DoubleFlapName } from "../words.json"
import Opening from "./Opening"

export class DoubleFlap extends Opening {
  getName = () => DoubleFlapName

  getHeight = () => this.page.size.height

  getWidth = () => calc(this.photo.size.width, CommonFractions.ThreeQuarters)
}