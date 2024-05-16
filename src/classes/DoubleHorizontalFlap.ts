import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import Opening from "./Opening"

export class DoubleHorizontalFlap extends Opening {
  getHeight = () => this.page.size.height

  getWidth = () => calc(this.photo.size.height, CommonFractions.ThreeQuarters)
}