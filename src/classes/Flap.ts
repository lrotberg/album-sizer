import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { Page, Photo } from "../interfaces.ts"
import words from "../words.ts"
import Opening from "./Opening"

export class Flap extends Opening {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.FlapName)
    this.setDimensions(
      {
        part1:
        {
          height1: this.page.size.height,
          width1: calc(this.photo.size.width, CommonFractions.FiveEights),
          units1: 1
        }
      },
    )
  }
}