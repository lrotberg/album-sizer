import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { HorizontalFlapName } from "../words.json"
import Opening from "./Opening"

export class HorizontalFlap extends Opening {
  getName = () => HorizontalFlapName

  getHeight = () => this.page.size.height

  getWidth = () => calc(this.photo.size.height, CommonFractions.FiveEights)
}