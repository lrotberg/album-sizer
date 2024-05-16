import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { Flap } from "./Flap"

export class Cross extends Flap {
  getHeightPart2 = () => calc(this.photo.size.width, CommonFractions.Eighth)

  getWidthPart2 = () => calc(this.page.size.width, CommonFractions.Half)
}