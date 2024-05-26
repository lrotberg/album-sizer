import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { EnvelopeName } from "../words.json"
import Opening from "./Opening"

export class Envelope extends Opening {
  getName = () => EnvelopeName

  getHeight = () => calc(this.photo.size.width, 2, CommonFractions.FiveEights)

  getWidth = () => calc(this.photo.size.height, CommonFractions.Eighth)
}