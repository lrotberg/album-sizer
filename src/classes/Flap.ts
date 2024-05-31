import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import words from "../words.ts"
import Opening from "./Opening"

export class Flap extends Opening {
  getName = () => words.FlapName

  getHeight = () => this.page.size.height

  getWidth = () => calc(this.photo.size.width, CommonFractions.FiveEights)
}