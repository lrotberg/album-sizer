import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { SideWaterfallName } from "../words.json"
import Opening from "./Opening"

export class SideWaterfall extends Opening {
  getName = () => SideWaterfallName

  getHeight = () => this.page.size.height

  getWidth = () => calc(this.photo.size.width, 1, CommonFractions.Eighth)
}