import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { SideEnvelopeName } from "../words.json"
import Opening from "./Opening"

export class SideEnvelope extends Opening {
  getName = () => SideEnvelopeName

  getHeight = () => this.page.size.height

  getWidth = () => calc(this.photo.size.width, 2, CommonFractions.FiveEights)
}