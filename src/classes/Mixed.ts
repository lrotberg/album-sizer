import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { MixedName } from "../words.json"
import { Flap } from "./Flap"

export class Mixed extends Flap {
  getName = () => MixedName

  getHeightPart2 = () => calc(this.page.size.height, CommonFractions.FiveEights)

  getWidthPart2 = () => calc(this.photo.size.width, CommonFractions.Eighth)
}