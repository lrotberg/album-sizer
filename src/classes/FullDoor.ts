import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { FullDoorName } from "../words.json"
import Opening from "./Opening"

export class FullDoor extends Opening {
  getName = () => FullDoorName

  getHeight = () => this.page.size.height

  getWidth = () => calc(this.page.size.width / 2, CommonFractions.FiveEights)
}