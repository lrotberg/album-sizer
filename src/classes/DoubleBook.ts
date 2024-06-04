import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { Page, Photo } from "../interfaces"
import words from "../words"
import Opening from "./Opening"

export class DoubleBook extends Opening {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.DoubleBookName)
    this.setDimensions({
      part1: {
        height1: calc(this.page.size.height, CommonFractions.ThreeQuarters),
        width1: calc(this.photo.size.width, CommonFractions.Eighth),
        units1: 2
      }
    })
  }
}