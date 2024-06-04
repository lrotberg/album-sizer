import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { Page, Photo } from "../interfaces"
import words from "../words"
import Opening from "./Opening"

export class FallingFlap extends Opening {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.FallingFlapName)
    this.setDimensions({
      part1: {
        height1: calc(this.photo.size.width, CommonFractions.FiveEights),
        width1: this.page.size.width,
        units1: 1
      }
    })
  }
}