import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import Opening from "./Opening"

export class DoubleBook extends Opening {
  getHeight = () => calc(this.page.size.height, CommonFractions.ThreeQuarters)

  getWidth = () => calc(this.photo.size.width, CommonFractions.Eighth)
}