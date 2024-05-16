import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import Opening from "./Opening"

export class FullDoor extends Opening {
  getHeight = () => this.page.size.height

  getWidth = () => calc(this.page.size.width / 2, CommonFractions.FiveEights)
}