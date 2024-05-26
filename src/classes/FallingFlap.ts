import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { FallingFlapName } from "../words.json"
import Opening from "./Opening"

export class FallingFlap extends Opening {
  getName = () => FallingFlapName

  getHeight = () => calc(this.photo.size.width, CommonFractions.FiveEights)

  getWidth = () => this.page.size.width
}