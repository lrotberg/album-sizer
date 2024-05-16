import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import Opening from "./Opening"

export class SideWaterfall extends Opening {
  getHeight = () => this.page.size.height

  getWidth = () => calc(this.photo.size.width, 1, CommonFractions.Eighth)
}