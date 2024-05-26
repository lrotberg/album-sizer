import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { DoubleHorizontalFlapName } from "../words.json"
import Opening from "./Opening"

export class DoubleHorizontalFlap extends Opening {
  getName = () => DoubleHorizontalFlapName

  getHeight = () => this.page.size.height

  getWidth = () => calc(this.photo.size.height, CommonFractions.ThreeQuarters)
}