import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { PulloutName } from "../words.json"
import Opening from "./Opening"

export class Pullout extends Opening {
  getName = () => PulloutName

  getHeight = () => calc(this.photo.size.height, CommonFractions.Eighth)

  getWidth = () => calc(this.photo.size.width, CommonFractions.Eighth)
}