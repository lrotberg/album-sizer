import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import Opening from "./Opening"

export class FallingFlap extends Opening {
  getHeight = () => calc(this.photo.size.width, CommonFractions.FiveEights)

  getWidth = () => this.page.size.width
}