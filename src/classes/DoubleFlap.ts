import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { Page, Photo } from "../interfaces"
import words from "../words"
import Opening from "./Opening"

export class DoubleFlap extends Opening {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.DoubleFlapName)
    this.setDimensions({
      part1: {
        height1: this.page.size.height,
        width1: calc(this.photo.size.width, CommonFractions.ThreeQuarters),
        units1: 2
      }
    })
  }
}