import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { FlapName } from "../words.json"
import Opening from "./Opening"

export class Flap extends Opening {
  getName = () => FlapName

  getHeight = () => this.page.size.height

  getWidth = () => calc(this.photo.size.width, CommonFractions.FiveEights)
}