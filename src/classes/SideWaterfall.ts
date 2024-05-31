import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import words from "../words"
import Opening from "./Opening"

export class SideWaterfall extends Opening {
  getName = () => words.SideWaterfallName

  getHeight = () => this.page.size.height

  getWidth = () => calc(this.photo.size.width, 1, CommonFractions.Eighth)
}